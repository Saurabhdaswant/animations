"use client";

import React, { useEffect, useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Loader, Star } from "react-feather";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const [buttonState, setButtonState] = useState("default");
  // const [isGreen, setIsGreen] = useState(false);

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
              <Star width={80} height={80} strokeWidth={2.5} />
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
              className=" "
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
            className="flex overflow-hidden  items-center gap-3"
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
              <CheckCircle2
                width={80}
                height={80}
                strokeWidth={2}
                stroke="#d1fae5"
                fill="currentColor"
              />
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
            className="flex overflow-hidden  items-center gap-4"
          >
            {" "}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: [0, 20, -15, 12.5, -10, 10, -7.5, 7.5, -5, 5, 0],
                transition: {
                  duration: 0.5,
                },
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
              <AlertCircle
                width={80}
                height={80}
                strokeWidth={2.5}
                stroke="#fee2e2"
                fill="currentColor"
              />
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
              Transaction Failed
            </motion.span>
          </motion.div>
        );
    }
  }, [buttonState]);

  useEffect(() => {
    setTimeout(() => {
      const states = ["loading", "failed", "loading", "success", "loading"];
      let index = 0;
      const intervalId = setInterval(() => {
        setButtonState(states[index]);
        index = (index + 1) % states.length;
      }, 2000);

      return () => clearInterval(intervalId);
    }, 2000);
    setButtonState("success");
  }, []);

  return (
    <div className="flex w-full md:w-[80%] mx-auto flex-col font-[family-name:var(--font-open-runde-bold)]  p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col text-[#2e2e2e] gap-4 row-start-2 items-center sm:items-start">
        <h1 className=" text-6xl ">Crafts</h1>
        <p className=" text-3xl">
          {" "}
          Check out animations {""}
          <a
            href="https://x.com/DaswantSaurabh"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400 space-x-1 cursor-pointer"
          >
            I
          </a>{" "}
          crafted while learning Framer Motion!{" "}
          {/* animations are crafted by{" "} */}
          {/* <strong className="text-blue-400">@daswantsaurabh</strong> for */}
          {/* learning purpose */}
        </p>
        <div className="mt-10 w-full">
          {[...Array(4)].map((_, idx) => {
            return (
              <div key={idx} className="mt-10    space-y-4">
                <p className="">
                  {/* {idx}. */}
                  Fluid Family Button
                </p>
                <div className="rounded-xl border border-solid border-black/[.08]  transition-colors flex items-center justify-center bg-white  hover:border-transparent text-sm sm:text-base h-[30rem]  px-4 ">
                  <div className="font-[family-name:var(--font-open-runde-bold)]  cursor-pointer grid place-items-center  text-white">
                    <motion.div
                      // onClick={() => {
                      //   if (!isGreen) {
                      //     setIsGreen(true);
                      //   } else setIsGreen(false);

                      //   setTimeout(() => {
                      //     if (!isGreen) {
                      //       setButtonState("success");
                      //     } else {
                      //       setButtonState("failed");
                      //     }
                      //   }, 2000);

                      //   setButtonState("loading");
                      // }}
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
                          width: 601,
                        },
                        failed: {
                          backgroundColor: "#fee2e2",
                          color: "#ef4444",
                          width: 660,
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
