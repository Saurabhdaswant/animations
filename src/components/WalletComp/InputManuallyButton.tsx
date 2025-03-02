import React from "react";
import { motion } from "framer-motion";
import { PencilIcon } from "@heroicons/react/16/solid";
import { useWalletStep } from "@/providers/WalletStepProvider";

export default function InputManuallyButton() {
  const { setCurrentStep, setNextStep, setPrevStep } = useWalletStep();

  return (
    <motion.div
      className="flex items-center mt-4 justify-center px-12 gap-2 space-x-2"
      layout
      initial={{ opacity: 0, y: 5, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setCurrentStep("third")}
      onMouseOver={() => {
        setNextStep("third");
        setPrevStep("second");
      }}
    >
      <div className="flex-1 border-b border-gray-100/80" />
      <button className="inline-flex items-center gap-2 text-[13px] font-medium text-[#A6A6A6]">
        <PencilIcon className="w-3.5 h-3.5" />
        Input Manually
      </button>
      <div className="flex-1 border-b border-gray-100/80" />
    </motion.div>
  );
}
