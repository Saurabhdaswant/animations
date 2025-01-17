import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Wallet2 = () => {
  const [screen, setScreen] = React.useState<"second" | "third">("second");

  return (
    <div className="mt-10 space-y-4 relative">
      <div className="rounded-xl border border-solid border-black/[.08] transition-colors flex items-center justify-center bg-white hover:border-transparent text-sm sm:text-base py-10 px-4">
        <div className="flex relative items-center h-[750px] justify-center gap-4 w-96 bg-white border border-slate-100 rounded-3xl shadow-lg overflow-hidden space-y-4">
          <AnimatePresence mode="wait">
            {screen === "second" && (
              <div>
                <motion.h2
                  layout
                  className="text-center text-lg font-bold"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                >
                  Second Screen
                </motion.h2>
                <motion.div
                  layoutId="green-card"
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  style={{ borderRadius: "20px", background: "#57dc5c" }}
                  className="bg-green-60 cursor-pointer mt-8 p-4 w-[90%] mx-auto h-[12rem]"
                  onClick={() => setScreen("third")}
                />
              </div>
            )}
            {screen === "third" && (
              <div>
                <motion.div
                  layoutId="green-card"
                  onClick={() => setScreen("second")}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  style={{ borderRadius: "8px", background: "#57dc5c" }}
                  className="bg-[#d5f7de] -mt-4 rounded-lg p-4 text-white w-5 h-5 mx-auto"
                />
                <motion.h2
                  layout
                  className="text-center text-lg font-bold"
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  exit={{ x: 0 }}
                >
                  Third Screen
                </motion.h2>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Wallet2;
