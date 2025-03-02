import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useWalletStep } from "@/providers/WalletStepProvider";

export default function BottomSection() {
  const { currentStep } = useWalletStep();

  return (
    <div className=" ">
      <div
        className={` min-w-[340px]  relative mt-10 opacity-50 mb-5 p-4 pt-5 ${
          currentStep === "third"
            ? ""
            : "border-t-2 border-dashed border-gray-200"
        } mx-auto w-[70%] rounded-3xl`}
      >
        {currentStep === "second" ? (
          <>
            <ShieldCheckIcon
              color="#A6A6A6"
              className=" absolute left-1/2 -translate-x-1/2 -top-3 w-5 h-5"
            />

            <motion.p
              className="text-[#A6A6A6] text-xs text-center"
              layout
              initial={{ opacity: 0, y: 5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, y: 0 }}
            >
              After entering your Secret Recovery Phrase, you'll be able to
              continue the importing process.
            </motion.p>

            <motion.button
              disabled={true}
              className="bg-[#54B7F9]  w-full rounded-full text-white font-semibold py-2.5 px-4  mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Import
            </motion.button>
          </>
        ) : currentStep === "first" ? (
          <p className="text-transparent text-xs text-center">
            nonses importing proc importing procimporting procimporting proc
          </p>
        ) : (
          <>
            <motion.p
              className="text-[#A6A6A6] text-xs  text-center"
              layout
              initial={{ opacity: 0, y: 5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, y: 0 }}
            >
              Enter first word to continue{" "}
            </motion.p>

            <motion.button
              disabled={true}
              className="bg-[#54B7F9]  w-full rounded-full text-white font-semibold py-2.5 px-4  mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Continue
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
}
