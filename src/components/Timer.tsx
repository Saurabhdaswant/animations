import { AnimatePresence, motion } from "framer-motion";
import useToggle from "@/hooks/useToggle";
import { CameraIcon, UsersIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Hourglass } from "lucide-react";

export default function Timer() {
  const [state, setState] = useState("days");
  const [prevState, setPrevState] = useState("days");

  return (
    <div className="mt-10    space-y-4">
      <p className="font-[family-name:var(--font-open-runde-bold)]">
        Age Counter
      </p>
      <div className="rounded-xl border border-solid border-black/[.08]  transition-colors flex items-center justify-center bg-white  hover:border-transparent text-sm sm:text-base h-[30rem]  px-4 ">
        <div className="font-[family-name:var(--font-open-runde-bold)]  cursor-pointer grid place-items-center  text-white">
          <motion.div
            className={`overflow-hidden cursor-pointer w-[450px] select-none shadow-lg  py-4    transition-colors  rounded-xl text-[#2e2e2e] bg-white  border border-slate-100 `}
          >
            <div
              className={` flex justify-between px-4 pb-4 border-b border-slate-100`}
            >
              <div className="flex items-center  gap-2">
                <Hourglass width={20} height={20} className="text-orange-400" />{" "}
                <div className="text-sm font-medium uppercase">
                  how old am i ?
                </div>
              </div>
            </div>

            <div
              className={`flex items-center justify-between px-4 py-4 border-b border-slate-100`}
            >
              <div
                className={`text-sm font-medium uppercase ${
                  state === "days" ? "text-gray-500" : ""
                }`}
                onClick={() => {
                  setState("days");
                  setPrevState("days");
                }}
              >
                Days
              </div>
              <div
                className={`text-sm font-medium uppercase ${
                  state === "months" ? "text-gray-500" : ""
                }`}
                onClick={() => {
                  setState("months");
                }}
              >
                Months
              </div>
              <div
                className={`text-sm font-medium uppercase ${
                  state === "years" ? "text-gray-500" : ""
                }`}
                onClick={() => {
                  setState("years");
                  setPrevState("years");
                }}
              >
                Years
              </div>
            </div>

            <div className="  flex flex-col items-center justify-center pt-4 px-4">
              <div className=" font-thin  mt-0.5 text-[#2e2e2e5e]">
                your are{" "}
              </div>
              <AnimatePresence mode="popLayout" initial={false}>
                {state === "days" && (
                  <motion.div
                    key="days"
                    layout
                    className=" w-fit text-center"
                    transition={{
                      duration: 0.25,
                    }}
                    initial={{
                      opacity: 0,
                      x: prevState === "days" ? -400 : 400,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      x: prevState === "days" ? -400 : 400,
                      opacity: 0,
                      filter: "blur(4px)",
                    }}
                  >
                    <div className="text-[40px] my-4 font-medium"> 7,746 </div>
                    <div className="font-thin mt-0.5 text-[#2e2e2e5e]">
                      days
                    </div>
                  </motion.div>
                )}
                {state === "months" && (
                  <motion.div
                    key="months"
                    layout
                    className=" w-fit text-center"
                    transition={{
                      duration: 0.25,
                    }}
                    initial={{
                      opacity: 0,
                      x: prevState === "days" ? 400 : -400,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      x: prevState === "days" ? -400 : 400,
                      opacity: 0,
                      filter: "blur(4px)",
                    }}
                  >
                    <div className="text-[40px] my-4 font-medium"> 254 </div>
                    <div className="font-thin mt-0.5 text-[#2e2e2e5e]">
                      months
                    </div>
                  </motion.div>
                )}{" "}
                {state === "years" && (
                  <motion.div
                    layout
                    key="years"
                    className=" w-fit text-center"
                    transition={{
                      duration: 0.25,
                    }}
                    initial={{
                      opacity: 0,
                      x: prevState === "years" ? 400 : -400,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      x: prevState === "years" ? 400 : -400,
                      opacity: 0,
                      filter: "blur(4px)",
                    }}
                  >
                    <div className="text-[40px] my-4 font-medium"> 21 </div>
                    <div className="font-thin mt-0.5 text-[#2e2e2e5e]">
                      years
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
