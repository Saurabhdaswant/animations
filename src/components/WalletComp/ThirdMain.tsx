import React from "react";
import { motion } from "framer-motion";
import { useWalletStep } from "@/providers/WalletStepProvider";

export default function ThirdMain() {
  const { currentStep } = useWalletStep();

  return (
    <>
      {currentStep === "third" && (
        <div className="h-[12rem] relative">
          <div className="absolute -top-40 px-2 w-full">
            {[...Array(1)].map((_, index) => (
              <motion.div
                className="bg-white rounded-[18px] w-full mt-8 shadow-2xl p-1.5"
                initial={{ opacity: 0, y: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                exit={{ opacity: 0, y: 0, x: 0 }}
                transition={{
                  duration: 0.3,
                }}
              >
                <motion.div className="bg-gray-100 rounded-xl border-gray-200 border border-dotted h-14 cursor-pointer text-white w-full mx-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
