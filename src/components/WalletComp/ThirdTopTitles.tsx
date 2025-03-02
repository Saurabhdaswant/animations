import React from "react";
import { motion } from "framer-motion";

export default function ThirdTopTitles() {
  return (
    <motion.div key="second2" className="p-3 absolute top-[84px] w-full ">
      <motion.h2
        initial={{ opacity: 0, y: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        exit={{ opacity: 0, y: 0, x: 100 }}
        transition={{
          duration: 0.3,
        }}
        className="mt-11 text-[#1E1E1E] font-semibold text-xl"
      >
        Enter Your Phrase
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        exit={{ opacity: 0, y: 0, x: 100 }}
        transition={{
          duration: 0.3,
        }}
        className="text-[#A6A6A6] mt-2 max-w-[80%] leading-5"
      >
        Enter your Secret Recovery Phrase in its exact order , from 1 - 12{" "}
      </motion.p>
    </motion.div>
  );
}
