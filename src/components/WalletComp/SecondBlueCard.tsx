import React from "react";

import { motion } from "framer-motion";

export default function SecondBlueCard() {
  return (
    <motion.div
      layoutId="blue-card"
      transition={{
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="cursor-pointer mt-14 p-4 text-white w-[95%] mx-auto h-[12rem]"
      style={{
        borderRadius: "20px",
        background: "#54B7F9",
      }}
    />
  );
}
