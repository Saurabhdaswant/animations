import { cardData } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";
import CardItem from "./CardItem";
import React from "react";
import { useWalletStep } from "@/providers/WalletStepProvider";

export default function FirstStep() {
  const { currentStep } = useWalletStep();

  return (
    <AnimatePresence mode="sync">
      {currentStep === "first" && (
        <>
          <motion.div
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            layoutId="blue-card"
            style={{ borderRadius: "20px", background: "#54B7F9" }}
            className="bg-green-60 cursor-pointer p-4 text-white w-[75%] mb-40 rounded-b-none mx-auto h-40"
          />
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, color: "transparent" }}
            transition={{
              duration: 0.4,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="p-8 pt-0 absolute z-50 border-t border-[#E4E4E4] bg-white h-[500px] shadow-[0_-10px_130.4px_10px_rgba(0,0,0,0.1)]"
          >
            <motion.div
              transition={{
                duration: 0.4,
                ease: [0.25, 1, 0.5, 1],
              }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col my-9 items-center"
            >
              <motion.h2 className="text-[#1E1E1E] font-semibold text-xl">
                Add an Existing Wallet
              </motion.h2>
              <p className="text-[#A6A6A6] mt-1.5 text-center">
                Choose how you'd like to import an existing wallet into Family.
              </p>
            </motion.div>
            {/* Card items for first step */}
            <div className="flex flex-col gap-4">
              {cardData.map((card, idx) => {
                return <CardItem Key={idx} card={card} />;
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
