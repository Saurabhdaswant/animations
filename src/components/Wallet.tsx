import React from "react";
import { CreditCardIcon, PencilIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import { EllipsisVertical } from "lucide-react";

const Wallet = () => {
  const [screen, setScreen] = React.useState<"first" | "second" | "third">(
    "second"
  );

  const cardData = [
    {
      title: "Secret Recovery Phrase",
      description: "Import any wallet using a 12-word Secret Recovery Phrase.",
    },
    {
      title: "Private Key",
      description: "Import any wallet using a unique 64‑char Private Key.",
    },
    {
      title: "Existing Index ",
      description: "Add other wallets from an existing Secret Phrase index.",
    },
  ];

  return (
    <div className="mt-10 space-y-4 relative">
      <p className="font-[family-name:var(--font-open-runde-bold)]">Wallet</p>

      <div className="rounded-xl border border-solid border-black/[.08] transition-colors flex items-center justify-center bg-white hover:border-transparent text-sm sm:text-base py-10 px-4">
        <div className="flex relative items-center h-[750px] justify-center gap-4 w-96 bg-white border border-slate-100 rounded-3xl shadow-lg overflow-hidden space-y-4">
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col h-full justify-end">
              <AnimatePresence mode="wait">
                {screen === "first" && (
                  <>
                    <motion.div
                      transition={{
                        duration: 0.29,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      layoutId="green-card"
                      onClick={() => setScreen("second")}
                      style={{ borderRadius: "20px", background: "#57dc5c" }}
                      className="bg-green-60 cursor-pointer  p-4 text-white w-[75%] -mb-10 rounded-b-none mx-auto h-40"
                    ></motion.div>
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="p-8 pt-0 absolute  z-50  border-t border-[#E4E4E4]  bg-white h-[500px] shadow-[0_-10px_130.4px_10px_rgba(0,0,0,0.1)]"
                    >
                      <motion.div
                        transition={{
                          duration: 0.15,
                          // ease: "easeOut",
                        }}
                        exit={{ opacity: 0, y: 30 }}
                        className="flex flex-col my-9 items-center"
                      >
                        <motion.h2 className="text-[#1E1E1E] font-semibold text-xl">
                          Add an Existing Wallet
                        </motion.h2>

                        <p className="text-[#A6A6A6] mt-1.5 text-center">
                          Choose how you’d like to import an existing wallet
                          into Family.{" "}
                        </p>
                      </motion.div>
                      <div className="flex flex-col gap-4">
                        {cardData.map((card: any, index: any) => (
                          <motion.div
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{
                              duration: 0.15,
                            }}
                            key={index}
                            onClick={() => setScreen("second")}
                            className="bg-[#FBFBFD] cursor-pointer flex items-center justify-between border border-[#F7F7F7] gap-3.5 rounded-[20px] p-4"
                          >
                            <div className="flex items-start gap-3">
                              <div className="bg-green-500 rounded-full w-fit p-2 flex items-center justify-center">
                                <CreditCardIcon className="text-white w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="text-base font-semibold text-[#25242B]">
                                  {card.title}
                                </h3>
                                <p className="text-sm text-[#A3A2A4]">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                            <div className="-mr-1.5">
                              <EllipsisVertical className="text-[#A3A2A4] w-5 h-5" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
              <>
                <div className="mt-36">
                  <div key={screen} className="p-8">
                    <motion.h2
                      layout
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{
                        opacity: 0,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className={`mt-11 ${
                        screen !== "second"
                          ? "text-transparent"
                          : "text-[#1E1E1E]"
                      } font-semibold text-xl `}
                    >
                      Import Wallet
                    </motion.h2>

                    <motion.p
                      layout
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{
                        duration: 0.3,
                      }}
                      className={`${
                        screen !== "second"
                          ? "text-transparent"
                          : "text-[#A6A6A6]"
                      } mt-1.5 `}
                    >
                      Enter your Secret Recovery Phrase to import your wallet
                      securely.
                    </motion.p>
                  </div>
                  {screen === "second" && (
                    <motion.div
                      layoutId="green-card"
                      transition={{
                        duration: 0.29,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      onClick={() => setScreen("first")}
                      className={`bg-green-60 cursor-pointer mt-8 p-4 text-white w-[90%] mx-auto h-[12rem] `}
                      style={{ borderRadius: "20px", background: "#57dc5c" }}
                    ></motion.div>
                  )}

                  {screen === "second" && (
                    <motion.div
                      className="flex items-center mt-4 justify-center  px-12 gap-2 space-x-2"
                      layout
                      initial={{ opacity: 0, y: 5, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{
                        opacity: 0,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="flex-1 border-b border-gray-100/80  "></div>

                      <button className="inline-flex items-center gap-2 text-[13px] font-medium text-[#A6A6A6]">
                        <PencilIcon className="w-3.5 h-3.5" />
                        Input Manually
                      </button>

                      <div className="flex-1 border-b border-gray-100/80 "></div>
                    </motion.div>
                  )}
                </div>

                <div>
                  <div className="mt-10 mb-5 p-4 border-t-2 border-dashed border-gray-100 mx-auto w-[90%] rounded-3xl">
                    {screen === "second" ? (
                      <motion.p
                        className="text-[#A6A6A6] text-xs text-center"
                        layout
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.3,
                        }}
                        exit={{
                          opacity: 0,
                          y: 0,
                        }}
                      >
                        After entering your Secret Recovery Phrase, you’ll be
                        able to continue the importing process.
                      </motion.p>
                    ) : (
                      <p className="text-transparent text-xs text-center">
                        nonses importing proc importing procimporting
                        procimporting proc
                      </p>
                    )}
                  </div>
                  <div className="bg-green-60 opacity-0 mt-5 rounded-full p-4 text-white w-[90%] mx-auto h-10"></div>
                </div>
              </>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
