"use client";

import EnvelopeOpening from "./components/EnvelopeOpening";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


import DivineOpening from "./components/DivineOpening";
import CoupleReveal from "./components/CoupleReveal";
import TraditionalInvitation from "./components/TraditionalInvitation";
import VenueDetails from "./components/VenueDetails";

type Scene = "envelope" | "opening" | "couple" | "invitation" | "venue";

export default function Home() {
  const [scene, setScene] = useState<Scene>("envelope");

  // Always open Scene 04 from the top.
  useEffect(() => {
    if (scene === "venue") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [scene]);

  const handleOpeningComplete = () => {
    setScene("couple");
  };

  const handleCoupleComplete = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    setScene("invitation");
  };

  // Scene 04 → Scene 01
  const handleVenueContinue = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    setScene("opening");
  };

  return (
    <AnimatePresence mode="wait">
      {scene === "envelope" && (
  <motion.div
    key="envelope-opening"
    initial={{
      opacity: 0,
      scale: 0.98,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    exit={{
      opacity: 0,
      scale: 1.03,
    }}
    transition={{
      duration: 1,
      ease: "easeOut",
    }}
  >
    <EnvelopeOpening
      onOpen={() => setScene("opening")}
    />
  </motion.div>
)}
      {/* ================================
          SCENE 01 — DIVINE OPENING
         ================================ */}
      {scene === "opening" && (
        <motion.div
          key="divine-opening"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
          }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <DivineOpening
            onOpen={handleOpeningComplete}
            isExiting={false}
          />
        </motion.div>
      )}

      {/* ================================
          SCENE 02 — COUPLE REVEAL
         ================================ */}
      {scene === "couple" && (
        <motion.div
          key="couple-reveal"
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <CoupleReveal
            onContinue={handleCoupleComplete}
          />
        </motion.div>
      )}

      {/* ================================
          SCENE 03 — TRADITIONAL INVITATION
         ================================ */}
      {scene === "invitation" && (
        <motion.div
          key="traditional-invitation"
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <TraditionalInvitation
            onContinue={() => setScene("venue")}
          />
        </motion.div>
      )}

      {/* ================================
          SCENE 04 — VINDU / VENUE DETAILS
         ================================ */}
      {scene === "venue" && (
        <motion.div
          key="venue-details"
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <VenueDetails
            onContinue={handleVenueContinue}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}