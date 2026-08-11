"use client";

import { motion } from "framer-motion";

type DivineOpeningProps = {
  onOpen?: () => void;
  isExiting?: boolean;
};

const slokaLines = [
  "|| శ్రీరామపత్నీ జనకష్య పుత్రీ!",
  "సీతాంగనా సుందర కోమలాంగీ.",
  "భూగర్భజాత భువనైక మాతా",
  "వధూవరాభ్యాం వరదాభవంతు ||",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function DivineOpening({
  onOpen,
  isExiting = false,
}: DivineOpeningProps) {
  return (
    <motion.main
      className="divine-opening"
      animate={
        isExiting
          ? {
              opacity: 0,
              scale: 1.04,
            }
          : {
              opacity: 1,
              scale: 1,
            }
      }
      transition={{
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* Background artwork */}
      <div className="divine-opening__background" />

      {/* Cinematic overlay */}
      <div className="divine-opening__overlay" />

      {/* Warm central atmosphere */}
      <div className="divine-opening__glow" />

      <div className="divine-opening__content">

        {/* =====================================
            1. SRIRASTU / SUBHAMASTU
            ===================================== */}

        <motion.div
          className="divine-opening__auspicious"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{
            duration: 1.1,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          <p>శ్రీరస్తు</p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.9,
              ease: "easeOut",
            }}
          >
            శుభమస్తు
          </motion.p>
        </motion.div>

        {/* =====================================
            2. WEDDING INVITATION HEADING
            ===================================== */}

        <motion.div
          className="divine-opening__wedding-heading"
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 1.35,
            ease: "easeOut",
          }}
        >
          <p>పత్తి వారి పెళ్లి పిలుపు</p>
        </motion.div>

        {/* =====================================
            3. TOP DIVIDER
            ===================================== */}

        <motion.span
          className="divine-opening__line"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 0.9,
            delay: 1.75,
            ease: "easeOut",
          }}
        />

        {/* =====================================
            4. SLOKA — LINE BY LINE
            ===================================== */}

        <motion.div
          className="divine-opening__sloka"
          initial="hidden"
          animate="visible"
        >
          {slokaLines.map((line, index) => (
            <motion.p
              key={line}
              variants={fadeUp}
              transition={{
                duration: 1,
                delay: 2.05 + index * 0.55,
                ease: "easeOut",
              }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* =====================================
            5. BOTTOM DIVIDER
            ===================================== */}

        <motion.span
          className="divine-opening__line"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 0.9,
            delay: 4.25,
            ease: "easeOut",
          }}
        />

        {/* =====================================
            6. OPEN INVITATION BUTTON
            ===================================== */}

        <motion.button
          type="button"
          className="divine-opening__button"
          onClick={onOpen}
          disabled={isExiting}
          initial={{
            opacity: 0,
            y: 22,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.1,
            delay: 4.8,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <span>ఆహ్వానాన్ని తెరవండి</span>

          <small>TAP TO OPEN</small>
        </motion.button>
      </div>
    </motion.main>
  );
}