import { AnimatePresence, motion } from "framer-motion";
import useToggle from "@/hooks/useToggle";
import { CameraIcon, UsersIcon } from "@heroicons/react/16/solid";

export default function CalendarWidget() {
  const [isInputVisible, showInput] = useToggle(true);

  const show = isInputVisible ? "bigger" : "_";

  return (
    <div className="mt-10    space-y-4">
      <p className="font-[family-name:var(--font-open-runde-bold)]">
        Calendar Widget
      </p>
      <div className="rounded-xl border border-solid border-black/[.08]  transition-colors flex items-center justify-center bg-white  hover:border-transparent text-sm sm:text-base h-[30rem]  px-4 ">
        <div className="font-[family-name:var(--font-open-runde-bold)]  cursor-pointer grid place-items-center  text-white">
          <motion.div
            onClick={() => {
              showInput();
            }}
            animate={show}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 0.6,
            }}
            initial={{
              height: 116,
              width: 205,
            }}
            variants={{
              bigger: {
                width: 460,
                height: 205,
              },
            }}
            className={`cursor-pointer select-none shadow-lg overflow-hidden py-4    transition-colors  rounded-xl text-[#2e2e2e] bg-white  border border-slate-100 `}
          >
            <AnimatePresence>
              <div
                className={` flex justify-between px-4 pb-4 ${
                  isInputVisible && "border-b border-slate-100 "
                }`}
              >
                <div>
                  <div className=" mb-3 bg-orange-100 text-orange-400 text-xs px-2.5 py-1  font-medium  capitalize inline-block   rounded-full ">
                    15 mins
                  </div>
                  <div className="text-sm font-medium">Design Sync</div>
                  <div className="text-sm mt-0.5 text-[#2e2e2e90]">
                    1:30PM <span className=" font-sans ">→</span> 2:30PM
                  </div>
                </div>
                <motion.div
                  className={` cursor-pointer  grid place-items-center bg-orange-100 text-orange-400 w-8 h-8 rounded-full transition-colors `}
                  layout
                  animate={show}
                  transition={{
                    duration: 0.25,
                  }}
                  initial={{
                    opacity: 0,
                    filter: "blur(4px)",
                  }}
                  variants={{
                    bigger: {
                      opacity: 1,
                      filter: "blur(0px)",
                    },
                  }}
                  exit={{
                    filter: "blur(4px)",
                  }}
                >
                  {" "}
                  <CameraIcon width={20} height={20} />{" "}
                </motion.div>
              </div>

              <div className=" flex items-end justify-between pt-4 px-4">
                <motion.div
                  layout
                  animate={show}
                  transition={{
                    duration: 0.25,
                  }}
                  initial={{
                    opacity: 0,
                    filter: "blur(4px)",
                  }}
                  variants={{
                    bigger: {
                      opacity: 1,
                      filter: "blur(0px)",
                    },
                  }}
                  exit={{
                    filter: "blur(4px)",
                  }}
                >
                  <div className="text-sm font-medium">Users</div>
                  <motion.div
                    layout
                    transition={{
                      type: "ease-out",
                      duration: 0.2,
                    }}
                    whileHover={{
                      display: "flex",
                      gap: "12px",
                    }}
                    className="flex items-center mt-2 "
                  >
                    {[...Array(3)].map((_, idx) => {
                      return (
                        <motion.div
                          key={idx}
                          layout
                          className="w-7 h-7 bg-gray-200 gap -mx-1 rounded-full border border-white"
                        ></motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
                <motion.div
                  className={` cursor-pointer  grid place-items-center bg-orange-100 text-orange-400 w-8 h-8 rounded-full transition-colors `}
                  layout
                  animate={show}
                  transition={{
                    duration: 0.25,
                  }}
                  initial={{
                    opacity: 0,
                    filter: "blur(4px)",
                  }}
                  variants={{
                    bigger: {
                      opacity: 1,
                      filter: "blur(0px)",
                    },
                  }}
                  exit={{
                    filter: "blur(4px)",
                  }}
                >
                  {" "}
                  <UsersIcon width={20} height={20} />{" "}
                </motion.div>
              </div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
