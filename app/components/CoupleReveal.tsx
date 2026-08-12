"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type CoupleRevealProps = {
  onContinue?: () => void;
};

export default function CoupleReveal({
  onContinue,
}: CoupleRevealProps) {
  const [isDateRevealed, setIsDateRevealed] = useState(false);

  return (
    <main className="couple-reveal">
      <div className="couple-reveal__background" />

      <div className="couple-reveal__content">
        {/* Couple photograph */}
        <motion.div
          className="couple-reveal__photo"
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
        >
          <img
            src="/images/couple-hero.png"
            alt="Bride and groom"
          />
        </motion.div>

        {/* Bride */}
        <motion.h1
          className="couple-reveal__bride"
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          పత్తి లీలా మాధురి
        </motion.h1>

        {/* Ampersand */}
        <motion.div
          className="couple-reveal__ampersand"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: "easeOut",
          }}
        >
          &
        </motion.div>

        {/* Groom */}
        <motion.h2
          className="couple-reveal__groom"
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.6,
            ease: "easeOut",
          }}
        >
          రాగం శివసాయి కుమార్
        </motion.h2>

        {/* Wedding */}
        <motion.p
          className="couple-reveal__wedding"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 2.2,
          }}
        >
         ల వివాహ వేడుక
        </motion.p>

        {/* Date */}
        <motion.div
          className="couple-reveal__date-reveal"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2.6,
          }}
        >
          <button
            type="button"
            className={`couple-reveal__date${isDateRevealed ? " couple-reveal__date--revealed" : ""}`}
            onClick={() => setIsDateRevealed(true)}
            aria-label={isDateRevealed ? "Wedding date revealed" : "Tap to reveal the wedding date"}
          >
            {isDateRevealed ? (
              <>
                <motion.span
                  className="couple-reveal__sparkle couple-reveal__sparkle--left"
                  initial={{ opacity: 0, scale: 0.25, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.45 }}
                  aria-hidden="true"
                >
                  ✦
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                >
                  05 September 2026
                </motion.span>
                <motion.span
                  className="couple-reveal__sparkle couple-reveal__sparkle--right"
                  initial={{ opacity: 0, scale: 0.25, rotate: 45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.45, delay: 0.16 }}
                  aria-hidden="true"
                >
                  ✦
                </motion.span>
              </>
            ) : (
              <span className="couple-reveal__date-prompt">Tap to reveal the wedding date ✦</span>
            )}
          </button>
        </motion.div>

        {/* Continue */}
        <motion.button
          type="button"
          className="couple-reveal__continue"
          onClick={onContinue}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 3.2,
          }}
        >
          పెళ్లి ముహూర్త వివరాలు చూడండి (continue)
          
        </motion.button>
      </div>
    </main>
  );
}
