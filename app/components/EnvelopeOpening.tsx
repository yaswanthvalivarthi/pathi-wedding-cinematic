"use client";

import { motion } from "framer-motion";

type EnvelopeOpeningProps = {
  onOpen?: () => void;
};

export default function EnvelopeOpening({
  onOpen,
}: EnvelopeOpeningProps) {
  return (
    <main className="envelope-opening">
      <div className="envelope-opening__background" />

      <motion.div
        className="envelope-opening__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        {/* Heading */}
        <motion.div
          className="envelope-opening__heading"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.25,
        
          }}
        >
          <span className="envelope-opening__heading-main">
            పత్తి వారి పెళ్లి సందడి
            </span>

          <small>
            PATHI VARI PELLI SANDADI
          </small>
        </motion.div>

        {/* Envelope */}
        <motion.button
          type="button"
          className="envelope-opening__button"
          onClick={onOpen}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.7,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.97,
          }}
          aria-label="ఆహ్వానాన్ని తెరవండి"
        >
          <div className="envelope-opening__envelope">

            {/* Envelope flap */}
            <div className="envelope-opening__flap" />

            {/* Invitation card */}
            <div className="envelope-opening__card">
              <span className="envelope-opening__card-symbol">
                పెళ్ళి పిలుపు
                
              </span>
              

            </div>

            {/* Wax / gold seal */}
            
            <div className="envelope-opening__seal">
                <span className="envelope-opening__seal-text">
                    L❤️S
                </span>
            </div>

          </div>
        </motion.button>

        {/* Open instruction */}
        <motion.div
          className="envelope-opening__instruction"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.25,
          }}
        >
          
          <small>TAP ON ENVELOPE TO OPEN</small>
        </motion.div>
      </motion.div>
    </main>
  );
}