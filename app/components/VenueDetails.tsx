"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "../data/weddingData";
import {
  CornerFloral,
  DiyaOrnament,
  FloralDivider,
} from "./TraditionalOrnaments";

type VenueDetailsProps = {
  onContinue?: () => void;
};

export default function VenueDetails({
  onContinue,
}: VenueDetailsProps) {
  const { vindu, venue, hosts, organizers } = weddingData;

  return (
    <main className="venue-details">
      {/* Background ornaments */}
      <div
        className="venue-details__ornaments"
        aria-hidden="true"
      >
        <CornerFloral
          className="venue-details__corner venue-details__corner--top-left"
        />

        <CornerFloral
          className="venue-details__corner venue-details__corner--top-right"
          flip
        />

        <CornerFloral
          className="venue-details__corner venue-details__corner--bottom-left"
        />

        <CornerFloral
          className="venue-details__corner venue-details__corner--bottom-right"
          flip
        />

        <DiyaOrnament
          className="venue-details__diya venue-details__diya--left"
        />

        <DiyaOrnament
          className="venue-details__diya venue-details__diya--right"
        />
      </div>

      <div
        className="venue-details__background"
        aria-hidden="true"
      />

      <article className="venue-details__card">

        {/* ================================
            VINDU
           ================================ */}
        <motion.section
          className="venue-details__vindu"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            ease: "easeOut",
          }}
        >
          <FloralDivider />

          <p className="venue-details__vindu-title">
            {vindu.title}
          </p>

          <h1>{vindu.subtitle}</h1>
          {vindu.time && (
  <p className="venue-details__vindu-time">
    {vindu.time}
  </p>
)}
          <motion.figure
  className="venue-details__vindu-image-frame"
  initial={{
    opacity: 0,
    scale: 0.94,
    y: 12,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  transition={{
    duration: 0.9,
    delay: 0.35,
    ease: "easeOut",
  }}
>
  <div className="venue-details__vindu-image-inner">
  <Image
    
    alt="విందు భోజన కార్యక్రమము"
    src="/images/vindu.png"
    width={800}
    height={450}
    sizes="(max-width: 600px) 78vw, 420px"
    className="venue-details__vindu-image"
  />
</div>
</motion.figure>
        </motion.section>

        {/* ================================
            INVITATION
           ================================ */}
        <motion.section
          className="venue-details__hosts"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <h2>{hosts.title}</h2>

          {hosts.names.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </motion.section>

        <div
          className="venue-details__divider"
          aria-hidden="true"
        >
          ✦
        </div>

        {/* ================================
            VENUE
           ================================ */}
        <motion.section
          className="venue-details__venue"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: "easeOut",
          }}
        >
          <p className="venue-details__venue-title">
            {venue.title}
          </p>

          <motion.figure
            className="venue-details__image-frame"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.45,
              ease: "easeOut",
            }}
          >
            <div className="venue-details__image-inner">
              <Image
                src="/images/venue.png"
                alt="TTD Kalyana Mandapam"
                fill
                sizes="(max-width: 600px) 88vw, 540px"
                className="venue-details__image"
                priority
              />
            </div>
          </motion.figure>

          <h2>{venue.name}</h2>

          <p className="venue-details__location">
            {venue.location}
          </p>

          <motion.a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="venue-details__map"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
          >
            <span aria-hidden="true">⌖</span>
            <span>Google Maps</span>
          </motion.a>
        </motion.section>

        <div
          className="venue-details__divider"
          aria-hidden="true"
        >
          ✦
        </div>

        {/* ================================
            ORGANIZERS
           ================================ */}
        <motion.section
          className="venue-details__organizers"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          <h2>{organizers.title}</h2>

          {organizers.names.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </motion.section>

        {/* ================================
            FINAL CLOSING
           ================================ */}
        <motion.footer
          className="venue-details__footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 1.05,
          }}
        >
          <FloralDivider />

          <p>మీ రాక కోసం</p>
          <p>ఎదురుచూస్తున్నాము</p>
        </motion.footer>

        {onContinue && (
          <motion.button
            type="button"
            className="venue-details__continue"
            onClick={onContinue}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.25,
            }}
          >
            ← వెనుకకు
          </motion.button>
        )}
      </article>
    </main>
  );
}