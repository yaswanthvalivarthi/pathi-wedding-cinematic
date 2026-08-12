"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import DivineOpening from "./components/DivineOpening";
import CoupleReveal from "./components/CoupleReveal";
import TraditionalInvitation from "./components/TraditionalInvitation";
import VenueDetails from "./components/VenueDetails";

type Scene = "opening" | "couple" | "invitation" | "venue";

export default function Home() {
  const [scene, setScene] = useState<Scene>("opening");

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

  const handleVenueContinue = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <AnimatePresence mode="wait">
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
          <CoupleReveal onContinue={handleCoupleComplete} />
        </motion.div>
      )}

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
          <VenueDetails onContinue={handleVenueContinue} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}