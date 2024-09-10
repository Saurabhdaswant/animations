"use client";

import React, { useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Loader, Star } from "react-feather";

export default function Home() {
  const [buttonState, setButtonState] = useState("default");
  const [isGreen, setIsGreen] = useState(false);

  const content = useMemo(() => {
    switch (buttonState) {
      case "default":
        return (
          <motion.div
            key="default"
            className="flex items-center overflow-hidden gap-6"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.9,
              }}
            >
              <Star width={80} height={80} />
              {/* <SparklesIcon className=" " width={80} height={80} />{" "} */}
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.9,
              }}
            >
              Transaction
            </motion.span>
          </motion.div>
        );
      case "loading":
        return (
          <motion.div
            key="loading"
            className="flex items-center overflow-hidden gap-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0,
                transition: {
                  duration: 0.01,
                },
              }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.9,
              }}
            >
              <Loader
                className=" animate-spin"
                strokeWidth={3}
                width={80}
                height={80}
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -150, filter: "blur(2px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                x: -150,
                filter: "blur(2px)",
                transition: {
                  duration: 0.25,
                },
              }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.9,
              }}
              className=" text-nowrap "
            >
              Analyzing Transaction
            </motion.span>
          </motion.div>
        );
      case "success":
        return (
          <motion.div
            key="success"
            className="flex overflow-hidden  items-center gap-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0,
                transition: {
                  duration: 0.01,
                },
              }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.9,
              }}
            >
              <CheckCircle width={70} height={70} />
              {/* <CheckCircleIcon width={80} height={80} />{" "} */}
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: 150, filter: "blur(2px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                x: 150,
                filter: "blur(2px)",
                transition: {
                  duration: 0.25,
                },
              }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.9,
              }}
              className=" text-nowrap "
            >
              Transaction Safe
            </motion.span>
          </motion.div>
        );
      case "failed":
        return (
          <motion.div
            key="failed"
            className="flex overflow-hidden  items-center gap-6"
          >
            {" "}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0,
                transition: {
                  duration: 0.01,
                },
              }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.9,
              }}
            >
              <AlertTriangle width={80} height={80} />
              {/* <ExclamationCircleIcon width={80} height={80} />{" "} */}
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: 150, filter: "blur(2px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                x: 150,
                filter: "blur(2px)",
                transition: {
                  duration: 0.25,
                },
              }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.9,
              }}
              className=" text-nowrap "
            >
              Transaction Warning
            </motion.span>
          </motion.div>
        );
    }
  }, [buttonState]);

  return (
    <div className="flex flex-col  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className=" text-7xl">Framer Motion Crafts</h1>
        <p className="font-[family-name:var(--font-geist-mono)] text-xl">
          {" "}
          these animations are built by{" "}
          <strong className="text-blue-400">@daswantsaurabh</strong> for
          learning purpose
        </p>
        <div className="mt-10 w-full">
          {[...Array(4)].map((_, idx) => {
            return (
              <div key={idx} className="mt-10 space-y-4">
                <p className="font-[family-name:var(--font-geist-mono)]">
                  {" "}
                  {idx}. Family Happy Button Animation
                </p>
                <div className="rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-[50rem]  px-4 ">
                  <div className=" cursor-pointer grid place-items-center  text-white">
                    <motion.div
                      onClick={() => {
                        if (isGreen) {
                          setIsGreen(false);
                        } else setIsGreen(true);

                        setTimeout(() => {
                          if (isGreen) {
                            setButtonState("success");
                          } else {
                            setButtonState("failed");
                          }
                        }, 2000);

                        setButtonState("loading");
                      }}
                      animate={buttonState}
                      variants={{
                        default: {
                          backgroundColor: "#fff",
                          color: "#000",
                          width: 500,
                        },
                        loading: {
                          backgroundColor: "#dbeafe",
                          color: "#3b82f6",
                          width: 760,
                        },
                        success: {
                          backgroundColor: "#d1fae5",
                          color: "#10b981",
                          width: 600,
                        },
                        failed: {
                          backgroundColor: "#fee2e2",
                          color: "#ef4444",
                          width: 710,
                        },
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.4,
                      }}
                      className=" py-10 px-14 text-5xl  rounded-full font-bold"
                    >
                      <AnimatePresence mode="popLayout">
                        {content}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
