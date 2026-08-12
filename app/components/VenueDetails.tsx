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
  const { venue } = weddingData;

  return (
    <main className="venue-details">
      {/* Traditional background ornaments */}
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

        {/* Header */}
        <motion.header
          className="venue-details__header"
          initial={{
            opacity: 0,
            y: -18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <p>వివాహ వేడుక</p>

          <h1>{venue.title}</h1>

          <FloralDivider />
        </motion.header>

        {/* Venue image */}
        <motion.figure
          className="venue-details__image-frame"
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="venue-details__image-inner">
            <Image
              src="/images/venue.png"
              alt="Wedding venue"
              fill
              sizes="(max-width: 600px) 82vw, 520px"
              className="venue-details__image"
              priority
            />
          </div>
        </motion.figure>

        {/* Venue information */}
        <motion.section
          className="venue-details__main"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          <span className="venue-details__label">
            వేదిక
          </span>

          <h2>{venue.name}</h2>

          <p className="venue-details__location">
            {venue.location}
          </p>
        </motion.section>

        {/* Map */}
        <motion.a
          href={venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="venue-details__map"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.75,
          }}
        >
          <span
            className="venue-details__map-icon"
            aria-hidden="true"
          >
            ⌖
          </span>

          <span>Google Maps</span>
        </motion.a>

        {/* Closing */}
        <motion.footer
          className="venue-details__footer"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.95,
          }}
        >
          <FloralDivider />

          <p>
            మీ రాక కోసం ఎదురుచూస్తున్నాము
          </p>
        </motion.footer>

        {onContinue && (
          <motion.button
            type="button"
            className="venue-details__continue"
            onClick={onContinue}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 1.15,
            }}
          >
            ← వెనుకకు
          </motion.button>
        )}
      </article>
    </main>
  );
}