import { WalletStep } from "@/utils/constants";
import { PencilIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import BottomSection from "./WalletComp/BottomSecttion";
import FirstStep from "./WalletComp/FirstStep";
import ThirdBlueCard from "./WalletComp/ThirdBlueCard";
import WalletHeader from "./WalletComp/WalletHeader";

const Wallet = () => {
  const [currentStep, setCurrentStep] = React.useState<WalletStep>("first");
  const [nextStep, setNextStep] = React.useState<WalletStep>("first");
  const [prevStep, setPrevStep] = React.useState<WalletStep>("first");

  return (
    <div className="mt-10 space-y-4 relative">
      <p className="font-[family-name:var(--font-open-runde-bold)]">Wallet</p>
      <div className="rounded-xl border border-solid border-black/[.08] transition-colors flex items-center justify-center bg-white hover:border-transparent text-sm sm:text-base py-10 px-4">
        <div className="flex relative items-center h-[750px] justify-center gap-4 w-96 bg-white border border-slate-100 rounded-3xl shadow-lg overflow-hidden space-y-4">
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col  h-full justify-end">
              <WalletHeader
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                setNextStep={setNextStep}
                setPrevStep={setPrevStep}
              />
              <ThirdBlueCard currentStep={currentStep} />
              <FirstStep
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                setNextStep={setNextStep}
                setPrevStep={setPrevStep}
              />
              <div className="mt-36 px-4 ">
                {/* Second and third step content */}
                <AnimatePresence mode="sync">
                  {currentStep === "second" && (
                    <motion.div
                      key="second1"
                      className="p-8 absolute top-[108px]"
                    >
                      <motion.h2
                        initial={
                          prevStep === "first" || nextStep === "first"
                            ? { opacity: 0, y: 10, x: 0, scale: 0.9 }
                            : { opacity: 0, y: 0, x: -100 }
                        }
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={
                          prevStep === "first" || nextStep === "first"
                            ? { opacity: 0, y: 10, x: 0, scale: 0.9 }
                            : { opacity: 0, y: 0, x: -100 }
                        }
                        transition={{ duration: 0.3 }}
                        className="  text-[#1E1E1E] font-semibold text-xl"
                      >
                        Import Wallet
                      </motion.h2>
                      <motion.p
                        initial={
                          prevStep === "first" || nextStep === "first"
                            ? { opacity: 0, y: 10, x: 0, scale: 0.9 }
                            : { opacity: 0, y: 0, x: -100 }
                        }
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={
                          prevStep === "first" || nextStep === "first"
                            ? { opacity: 0, y: 10, x: 0, scale: 0.9 }
                            : { opacity: 0, y: 0, x: -100 }
                        }
                        transition={{ duration: 0.3 }}
                        className="text-[#A6A6A6] mt-1.5"
                      >
                        Enter your Secret Recovery Phrase to import your wallet
                        securely.
                      </motion.p>
                    </motion.div>
                  )}
                  {currentStep === "third" && (
                    <motion.div
                      key="second2"
                      className="p-3 absolute top-16 w-full "
                    >
                      <motion.h2
                        initial={{ opacity: 0, y: 0, x: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 0, x: 100 }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="mt-11 text-[#1E1E1E] font-semibold text-xl"
                      >
                        Enter Your Phrase
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 0, x: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 0, x: 100 }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="text-[#A6A6A6] mt-2 max-w-[80%] leading-5"
                      >
                        Enter your Secret Recovery Phrase in its exact order ,
                        from 1 - 12{" "}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input area for second and third step */}
                {(currentStep === "second" || currentStep === "third") && (
                  <>
                    <div className="h-[12rem] relative">
                      {currentStep === "second" && (
                        <div className=" absolute -top-32 w-full">
                          <motion.div
                            layoutId="blue-card"
                            transition={{
                              duration: 0.4,
                              ease: [0.25, 1, 0.5, 1],
                            }}
                            className="bg-green-60  cursor-pointer mt-14 p-4 text-white w-[95%] mx-auto h-[12rem]"
                            style={{
                              borderRadius: "20px",
                              background: "#54B7F9",
                            }}
                          />
                          {/* Input manually button */}
                          <motion.div
                            className="flex items-center mt-4 justify-center px-12 gap-2 space-x-2"
                            layout
                            initial={{ opacity: 0, y: 5, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setCurrentStep("third")}
                            onMouseOver={() => {
                              setNextStep("third");
                              setPrevStep("second");
                            }}
                          >
                            <div className="flex-1 border-b border-gray-100/80" />
                            <button className="inline-flex items-center gap-2 text-[13px] font-medium text-[#A6A6A6]">
                              <PencilIcon className="w-3.5 h-3.5" />
                              Input Manually
                            </button>
                            <div className="flex-1 border-b border-gray-100/80" />
                          </motion.div>
                        </div>
                      )}
                      {/* Input fields for third step */}
                      {currentStep === "third" && (
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
                      )}
                    </div>
                  </>
                )}
              </div>
              <BottomSection currentStep={currentStep} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
