import { useWalletStep } from "@/providers/WalletStepProvider";
import { motion } from "framer-motion";
import { ChevronLeft, HelpCircle } from "react-feather";

export default function WalletHeader() {
  const { currentStep, setCurrentStep, setNextStep, setPrevStep } =
    useWalletStep();

  return (
    <div className="flex absolute  z-10 top-12 w-full px-4 justify-between items-center mb-4">
      <motion.button
        key={currentStep}
        className="cursor-pointer text-[#A6A6A6] disabled:opacity-50 disabled:cursor-not-allowed"
        onMouseOver={() => {
          setNextStep(
            currentStep === "second"
              ? "first"
              : currentStep === "third"
              ? "second"
              : ("" as any)
          );

          setPrevStep(
            currentStep === "second"
              ? "third"
              : currentStep === "third"
              ? "second"
              : ("" as any)
          );
        }}
        onClick={() => {
          setCurrentStep(
            currentStep === "second"
              ? "first"
              : currentStep === "third"
              ? "second"
              : ("" as any)
          );
        }}
        disabled={currentStep === "first"}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <button className="text-[#A6A6A6] cursor-pointer ">
        <HelpCircle className="w-5 h-5" />
      </button>
    </div>
  );
}
