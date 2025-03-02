import React from "react";
import { LockClosedIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useWalletStep } from "@/providers/WalletStepProvider";

export default function ThirdBlueCard() {
  const { currentStep } = useWalletStep();

  return (
    <>
      {currentStep === "third" && (
        <div className="absolute  flex items-center  justify-center w-full  top-4">
          <motion.div
            layoutId="blue-card"
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="  mt-8   text-white w-8 mx-auto bg-opacity-30 bg-[#54B7F9]  h-5 flex items-center justify-center"
            style={{
              borderRadius: "4px",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.08 }}
            >
              <LockClosedIcon className="w-3 h-3 text-[#54B7F9]" />
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
}
