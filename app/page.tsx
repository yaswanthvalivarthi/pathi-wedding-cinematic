"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DivineOpening from "./components/DivineOpening";

export default function Home() {
  const [isOpening, setIsOpening] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    setTimeout(() => {
      setShowInvitation(true);
    }, 900);
  };

  return (
    <AnimatePresence mode="wait">
      {!showInvitation ? (
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
            onOpen={handleOpen}
            isExiting={isOpening}
          />
        </motion.div>
      ) : (
        <motion.main
          key="invitation"
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          style={{
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f7efdf",
            color: "#651f2b",
            textAlign: "center",
            padding: "24px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "14px",
                letterSpacing: "0.2em",
                marginBottom: "14px",
                opacity: 0.7,
              }}
            >
              THE INVITATION
            </p>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(30px, 8vw, 52px)",
                fontWeight: 400,
                margin: 0,
              }}
            >
              Coming Next
            </h1>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}