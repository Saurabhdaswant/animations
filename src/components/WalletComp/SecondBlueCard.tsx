import React from "react";

import { ClipboardDocumentListIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

export default function SecondBlueCard() {
  const NumberAndLines: React.FC<{ number: number }> = ({ number }) => (
    <div className="w-full flex flex-row justify-between items-end opacity-15">
      <div className="text-xs font-light  w-8">{number}</div>
      <div className="w-full h-[1px] rounded-full bg-white" />
    </div>
  );

  return (
    <motion.div
      layoutId="blue-card"
      transition={{
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="cursor-pointer relative flex items-center justify-center mt-14 p-4 text-white w-[95%] mx-auto h-[12rem]"
      style={{
        borderRadius: "20px",
        background: "#54B7F9",
      }}
    >
      <div className="flex flex-col gap-2  w-full ">
        {[...Array(6)].map((_, i) => (
          <NumberAndLines key={i} number={i + 1} />
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full ">
        {[...Array(6)].map((_, i) => (
          <NumberAndLines key={i + 6} number={i + 7} />
        ))}
      </div>
      <motion.button
        disabled={true}
        className="bg-white absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2 shadow-2xl flex items-center gap-3 text-sm w-fit rounded-full text-black font-semibold py-2.5 px-4"
      >
        <ClipboardDocumentListIcon className=" w-5 h-5" />
        Paste from Clipboard
      </motion.button>
    </motion.div>
  );
}
