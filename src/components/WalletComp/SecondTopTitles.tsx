import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWalletStep } from "@/providers/WalletStepProvider";

export default function SecondTopTitles() {
  const { prevStep, nextStep } = useWalletStep();

  return (
    <motion.div key="second1" className="p-8 absolute top-[108px]">
      <motion.h2
        initial={
          prevStep === "first" || nextStep === "first"
            ? { opacity: 0, y: 10, x: 0, scale: 0.9 }
            : { opacity: 0, y: 0, x: -100 }
        }
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        exit={
          prevStep === "first" || nextStep === "first"
            ? { opacity: 0, y: 10, x: 0, scale: 0.9 }
            : { opacity: 0, y: 0, x: -100 }
        }
        transition={{ duration: 0.3 }}
        className="  text-[#1E1E1E] font-semibold text-xl"
      >
        Import Wallet
      </motion.h2>
      <motion.p
        initial={
          prevStep === "first" || nextStep === "first"
            ? { opacity: 0, y: 10, x: 0, scale: 0.9 }
            : { opacity: 0, y: 0, x: -100 }
        }
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        exit={
          prevStep === "first" || nextStep === "first"
            ? { opacity: 0, y: 10, x: 0, scale: 0.9 }
            : { opacity: 0, y: 0, x: -100 }
        }
        transition={{ duration: 0.3 }}
        className="text-[#A6A6A6] mt-1.5"
      >
        Enter your Secret Recovery Phrase to import your wallet securely.
      </motion.p>
    </motion.div>
  );
}
