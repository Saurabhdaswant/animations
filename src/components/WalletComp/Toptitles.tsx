import { useWalletStep } from "@/providers/WalletStepProvider";
import {
  fromFirstAnimation,
  fromOtherAnimation,
  swipeHorizontally,
} from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";
export default function Toptitles() {
  const { currentStep, prevStep, nextStep } = useWalletStep();

  const animationProps =
    prevStep === "first" || nextStep === "first"
      ? fromFirstAnimation
      : fromOtherAnimation;

  return (
    <AnimatePresence mode="sync">
      {currentStep === "second" && (
        <motion.div key="second1" className="p-8 absolute top-[108px]">
          <motion.h2
            {...animationProps}
            className="  text-[#1E1E1E] font-semibold text-xl"
          >
            Import Wallet
          </motion.h2>
          <motion.p {...animationProps} className="text-[#A6A6A6] mt-1.5">
            Enter your Secret Recovery Phrase to import your wallet securely.
          </motion.p>
        </motion.div>
      )}
      {currentStep === "third" && (
        <motion.div key="second2" className="p-3 absolute top-[84px] w-full ">
          <motion.h2
            {...swipeHorizontally}
            className="mt-11 text-[#1E1E1E] font-semibold text-xl"
          >
            Enter Your Phrase
          </motion.h2>
          <motion.p
            {...swipeHorizontally}
            className="text-[#A6A6A6] mt-2 max-w-[80%] leading-5"
          >
            Enter your Secret Recovery Phrase in its exact order , from 1 - 12{" "}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
