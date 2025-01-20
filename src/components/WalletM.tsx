import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardDocumentIcon,
  PencilIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const primaryColor = "yellow-500";

const walletTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
};

const walletContentTransition = {
  type: "spring",
  duration: 0.2,
};

interface WalletProps {
  state: "Illustration" | "Default" | "Small";
  nextStep: () => void;
}

const Wallet: React.FC<WalletProps> = ({ state, nextStep }) => {
  return (
    <motion.div
      className={`bg-${primaryColor} text-white rounded-lg absolute z-10 ${
        state === "Illustration" || state === "Default" ? "p-5" : "p-2"
        // chaning padding here based on the state
      }`}
      initial={false}
      // major animation is happemiing here :
      animate={{
        width:
          state === "Illustration"
            ? "70%"
            : state === "Default"
            ? "85%"
            : "10%",
        height: state === "Illustration" ? 140 : state === "Default" ? 224 : 24,
        top: state === "Illustration" ? 160 : state === "Default" ? 300 : 75,
        borderRadius:
          state === "Illustration" ? 24 : state === "Default" ? 24 : 4,
        borderBottomRightRadius:
          state === "Illustration" ? 0 : state === "Default" ? 24 : 4,
        borderBottomLeftRadius:
          state === "Illustration" ? 0 : state === "Default" ? 24 : 4,
        backgroundColor:
          state === "Small" ? "rgb(234 179 8 / 0.2)" : "rgb(250 204 21 / 1)",

        // all in all just width and height and roundedss and bg color is changing
      }}
      transition={walletTransition}
    >
      {/* below the the illustration that is circle and lines on top right */}
      <motion.div
        key="Illustration"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{
          opacity: state === "Illustration" ? 1 : 0,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: state === "Illustration" ? 0 : 1,
          filter: "blur(8px)",
        }}
        transition={walletContentTransition}
        className="absolute inset-0 p-4 flex flex-row justify-between items-start"
      >
        <div className="size-12 rounded-full bg-white/30" />
        <div className="w-32 h-6 rounded-full bg-white/30" />
      </motion.div>

      <motion.div
        key="Default"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: state === "Default" ? 1 : 0, filter: "blur(0px)" }}
        exit={{ opacity: state === "Default" ? 0 : 1, filter: "blur(8px)" }}
        transition={walletContentTransition}
        className="absolute inset-0 p-4 flex flex-row bg-black gap-16 center justify-between items-start"
      >
        <div className="flex flex-col gap-2 bg-black w-full blur-[1px]">
          {Array.from({ length: 6 }, (_, i) => (
            <SeedPhraseLine key={i} number={i + 1} />
          ))}
        </div>
        <div className="flex flex-col gap-2 w-full blur-[1px]">
          {Array.from({ length: 6 }, (_, i) => (
            <SeedPhraseLine key={i + 6} number={i + 7} />
          ))}
        </div>
        <motion.div
          key="ButtonPaste"
          className="absolute flex flex-row center gap-2 bg-white text-zinc-700 rounded-full whitespace-nowrap px-4 py-2 font-semibold text-sm cursor-pointer shadow-md"
        >
          <ClipboardDocumentIcon className="w-4 h-4" />
          Paste from Clipboard
        </motion.div>
        <div
          className="absolute -bottom-10 flex flex-row gap-2 w-full center text-black font-semibold text-sm cursor-pointer"
          onClick={nextStep}
        >
          <PencilIcon className="w-4 h-4" />
          <p>Input Manually</p>
        </div>
      </motion.div>
      <motion.div
        key="Small"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: state === "Small" ? 1 : 0, filter: "blur(0px)" }}
        exit={{ opacity: state === "Small" ? 0 : 1, filter: "blur(8px)" }}
        transition={walletContentTransition}
        className={`flex flex-row h-full w-full center text-yellow-500`}
      >
        <LockClosedIcon className={`absolute w-6 h-6`} />
      </motion.div>
    </motion.div>
  );
};

const SeedPhraseLine: React.FC<{ number: number }> = ({ number }) => (
  <div className="w-full flex flex-row justify-between items-end opacity-40">
    <div className="text-sm font-light tabular-nums w-8">{number}</div>
    <div className="w-full h-[1px] rounded-full bg-white" />
  </div>
);

const WalletM: React.FC = () => {
  const [state, setState] = useState<"Illustration" | "Default" | "Small">(
    "Illustration"
  );

  const handleNextStep = () => {
    setState((prev) =>
      prev === "Illustration"
        ? "Default"
        : prev === "Default"
        ? "Small"
        : "Illustration"
    );
  };

  return (
    <div className="relative w-full text-black h-screen flex items-center justify-center">
      <Wallet state={state} nextStep={handleNextStep} />
    </div>
  );
};

export default WalletM;
