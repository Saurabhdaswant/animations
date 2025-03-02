import {
  CreditCardIcon,
  LockClosedIcon,
  PencilIcon,
  ShieldCheckIcon,
} from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import { EllipsisVertical } from "lucide-react";
import React from "react";
import { ChevronLeft, HelpCircle } from "react-feather";

const Wallet = () => {
  const [currentStep, setCurrentStep] = React.useState<
    "first" | "second" | "third"
  >("first");
  const [nextStep, setNextStep] = React.useState<"first" | "second" | "third">(
    "first"
  );
  const [prevStep, setPrevStep] = React.useState<"first" | "second" | "third">(
    "first"
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
      title: "Existing Index",
      description: "Add other wallets from an existing Secret Phrase index.",
    },
  ];

  const renderCard = (card: any, index: number) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      whileTap={{
        scale: 0.95,
        background: "#F4F4F6",
      }}
      key={index}
      onClick={() => setCurrentStep("second")}
      onMouseOver={() => {
        setNextStep("second");
        setPrevStep("first");
      }}
      className="bg-[#FBFBFD] cursor-pointer flex items-center justify-between border border-[#F7F7F7] gap-3.5 rounded-[20px] p-4"
    >
      <div className="flex items-start gap-3">
        <div className="bg-[#54B7F9] rounded-full w-fit p-2 flex items-center justify-center">
          <CreditCardIcon className="text-white w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-[#25242B]">
            {card.title}
          </h3>
          <p className="text-sm text-[#A3A2A4]">{card.description}</p>
        </div>
      </div>
      <div className="-mr-1.5">
        <EllipsisVertical className="text-[#a3a2a465] w-5 h-5" />
      </div>
    </motion.div>
  );

  return (
    <div className="mt-10 space-y-4 relative">
      <p className="font-[family-name:var(--font-open-runde-bold)]">Wallet</p>
      <div className="rounded-xl border border-solid border-black/[.08] transition-colors flex items-center justify-center bg-white hover:border-transparent text-sm sm:text-base py-10 px-4">
        <div className="flex relative items-center h-[750px] justify-center gap-4 w-96 bg-white border border-slate-100 rounded-3xl shadow-lg overflow-hidden space-y-4">
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col  h-full justify-end">
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
              <div className="absolute top-4 border w-full h-4 ">.</div>
              {currentStep === "third" && (
                <div className="absolute pr-5 border flex items-center  justify-center w-full  top-4">
                  <motion.div
                    layoutId="green-card"
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
              <AnimatePresence mode="sync">
                {currentStep === "first" && (
                  <>
                    <motion.div
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      layoutId="green-card"
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
                          Choose how you'd like to import an existing wallet
                          into Family.
                        </p>
                      </motion.div>
                      <div className="flex flex-col gap-4">
                        {cardData.map(renderCard)}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
              <div className="mt-36 px-4 ">
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

                {(currentStep === "second" || currentStep === "third") && (
                  <>
                    <div className="h-[12rem] relative">
                      {currentStep === "second" && (
                        <div className=" absolute -top-32 w-full">
                          <motion.div
                            layoutId="green-card"
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
                        After entering your Secret Recovery Phrase, you'll be
                        able to continue the importing process.
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
                      nonses importing proc importing procimporting
                      procimporting proc
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
