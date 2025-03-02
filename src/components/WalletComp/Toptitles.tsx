import { swipeHorizontally } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";
import SecondTopTitles from "./SecondTopTitles";
import { useWalletStep } from "@/providers/WalletStepProvider";
export default function Toptitles() {
  const { currentStep } = useWalletStep();

  return (
    <AnimatePresence mode="sync">
      {currentStep === "second" && <SecondTopTitles />}
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
