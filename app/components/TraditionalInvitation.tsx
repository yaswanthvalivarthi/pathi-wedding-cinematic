"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "../data/weddingData";
import {
  BananaTreeOrnament,
  CornerFloral,
  DiyaOrnament,
  FloralDivider,
  GoldDivider,
} from "./TraditionalOrnaments";

type TraditionalInvitationProps = {
  onContinue?: () => void;
};

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export default function TraditionalInvitation({
  onContinue,
}: TraditionalInvitationProps) {
  const {
    opening,
    bride,
    groom,
    marriage,
    muhurtham,
    vindu,
    invitation,
    closing,
  } = weddingData;

  return (
    <main className="traditional-invitation">
      {/* Decorative background */}
      <div
        className="traditional-invitation__background"
        aria-hidden="true"
      >
        <div className="traditional-invitation__pattern" />

        <CornerFloral
          className="traditional-invitation__corner traditional-invitation__corner--top-left"
        />

        <CornerFloral
          className="traditional-invitation__corner traditional-invitation__corner--top-right"
          flip
        />

        <CornerFloral
          className="traditional-invitation__corner traditional-invitation__corner--bottom-left"
        />

        <CornerFloral
          className="traditional-invitation__corner traditional-invitation__corner--bottom-right"
          flip
        />

        <DiyaOrnament
          className="traditional-invitation__diya traditional-invitation__diya--left"
        />

        <DiyaOrnament
          className="traditional-invitation__diya traditional-invitation__diya--right"
        />
      </div>

      <article className="traditional-invitation__content">
        {/* Banana tree decorations */}
        <BananaTreeOrnament
          className="traditional-invitation__banana-tree traditional-invitation__banana-tree--left"
        />

        <BananaTreeOrnament
          className="traditional-invitation__banana-tree traditional-invitation__banana-tree--right"
        />

        {/* Opening */}
        <motion.p
          className="traditional-invitation__invocation"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {opening.invocation}
        </motion.p>

        <motion.div
          className="traditional-invitation__header-divider"
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <FloralDivider />
        </motion.div>

        {/* Bride */}
        <motion.section
          className="traditional-invitation__family"
          {...reveal}
        >
          <p>{bride.father}</p>
          <p>{bride.mother}</p>

          <span className="traditional-invitation__relationship">
            {bride.relationship}
          </span>

          <h1 className="traditional-invitation__name">
            {bride.name}
          </h1>
          <p className="traditional-invitation__family-line">
            {bride.familyLine}
            </p>

          <motion.div
            className="traditional-invitation__character traditional-invitation__character--bride"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/bride-character.jpg"
              alt="Bride illustration"
              width={258}
              height={516}
              priority
            />
          </motion.div>
        </motion.section>

        <div
          className="traditional-invitation__separator"
          aria-hidden="true"
        >
          <FloralDivider />
        </div>

        {/* Groom */}
        <motion.section
          className="traditional-invitation__family"
          {...reveal}
        >
          <p>{groom.father}</p>
          <p>{groom.mother}</p>

          <span className="traditional-invitation__relationship">
            {groom.relationship}
          </span>

          <h2 className="traditional-invitation__name">
            {groom.name}
          </h2>

          <motion.div
            className="traditional-invitation__character traditional-invitation__character--groom"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/groom-character.jpg"
              alt="Groom illustration"
              width={258}
              height={516}
            />
          </motion.div>
        </motion.section>

        {/* Marriage */}
        <motion.section
          className="traditional-invitation__marriage"
          {...reveal}
        >
          <span aria-hidden="true">✦</span>

          <h2>{marriage.title}</h2>

          <span aria-hidden="true">✦</span>
        </motion.section>

        {/* Wedding ceremony artwork */}
        <motion.figure
          className="traditional-invitation__ceremony"
          {...reveal}
        >
          <Image
            src="/images/vivaham-ceremony-v2.png"
            alt="Telugu wedding ceremony illustration"
            width={813}
            height={743}
          />
        </motion.figure>

        <div
          className="traditional-invitation__section-divider"
          aria-hidden="true"
        >
          <GoldDivider />
        </div>

        {/* Muhurtham */}
        <motion.section
          className="traditional-invitation__muhurtham"
          {...reveal}
        >
          <h3>{muhurtham.title}</h3>

          {muhurtham.details && (
            <p className="traditional-invitation__calendar">
              {muhurtham.details}
            </p>
          )}

          <p className="traditional-invitation__date">
            {muhurtham.date}
          </p>

          <p className="traditional-invitation__time">
            {muhurtham.time}
          </p>
        </motion.section>


        {/* Traditional closing blessing */}
        <motion.section
          className="traditional-invitation__closing"
          {...reveal}
        >
          {closing.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </motion.section>

        {/* Continue to Scene 04 */}
        {onContinue && (
          <motion.button
            type="button"
            className="traditional-invitation__continue"
            onClick={onContinue}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            విందు/వేదిక వివరాలు చూడండి
          </motion.button>
        )}
      </article>
    </main>
  );
}