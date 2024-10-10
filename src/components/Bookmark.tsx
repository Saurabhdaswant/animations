import { useState } from "react";

import useToggle from "@/hooks/useToggle";
import { AnimatePresence, motion } from "framer-motion";

export default function TagsContainer() {
  const [isInputVisible, showInput] = useToggle(false);

  const [lils, setLils] = useState([1]);
  const show = lils.length >= 3 ? "bigger" : isInputVisible ? "yes" : "_";

  return (
    <div className="mt-10    space-y-4">
      <p className="font-[family-name:var(--font-open-runde-bold)]">
        Tags Container
      </p>
      <div className="rounded-xl border border-solid border-black/[.08]  transition-colors flex items-center justify-center bg-gray-50  hover:border-transparent text-sm sm:text-base h-[30rem]  px-4 ">
        <div className="font-[family-name:var(--font-open-runde-bold)]  grid place-items-center  text-white">
          <motion.div
            onClick={() => {
              if (!isInputVisible) {
                showInput();
              }
            }}
            animate={show}
            transition={{
              type: "ease-in-out",
              bounce: 0,
              duration: 0.2,
            }}
            initial={{
              height: "3rem",
              width: 120,
            }}
            variants={{
              yes: {
                width: 380,
                height: "4rem",
                display: "flex",
                gap: "1rem",
              },
              bigger: {
                width: 380,
                height: "8.2rem",
                display: "flex",
                gap: "0.5rem",
              },
            }}
            className={` p-2  ${
              isInputVisible ? "px-2" : "px-4"
            } flex justify-end  border group items-center  transition-colors  rounded-xl  bg-white shadow-xl `}
          >
            {isInputVisible && (
              <motion.div
                animate={show}
                transition={{
                  type: "ease-in-out",
                  bounce: 0,
                  duration: 0.1,
                }}
                initial={{
                  width: "2.5rem",
                }}
                variants={{
                  yes: {
                    width: "100%",
                  },
                  bigger: {
                    width: "100%",
                    height: "7rem",
                    alignItems: "start",
                  },
                }}
                className={`h-10 flex p-1.5 flex-wrap  gap-x-2 rounded-md bg-gray-100 shadow-inner `}
              >
                <div className="flex flex-wrap  gap-2">
                  <AnimatePresence mode="popLayout">
                    {lils.map((_, idx) => {
                      return (
                        <motion.div
                          key={idx}
                          initial={{
                            y: lils.length > 1 ? -10 : 0,
                          }}
                          animate={{
                            y: 0,
                          }}
                          exit={{
                            x: idx === 2 ? -100 : -10,
                            y: idx === 2 ? 40 : 0,
                            opacity: 0,
                          }}
                          className={`w-20  h-7 flex items-center justify-end  rounded bg-white border shadow `}
                        >
                          <svg
                            onClick={() => {
                              const filteredList = lils.filter(
                                (_, i) => i !== idx
                              );
                              setLils(filteredList);

                              if (filteredList.length === 0) {
                                showInput();
                              }
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            className="size-5 text-gray-400 cursor-pointer"
                          >
                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                          </svg>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
            <div
              className={`flex justify-center  gap-2 items-center  ${
                lils.length > 2 && "flex-col  px-2 gap-4"
              }`}
            >
              <motion.div layout>
                <svg
                  onClick={() => {
                    if (isInputVisible) {
                      if (lils.length < 9) {
                        setLils([...lils, 1]);
                      }
                    }
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-6 fill-gray-700 cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </motion.div>
              <motion.div layout>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-6 fill-gray-700 cursor-pointer"
                  onClick={() => {
                    setLils([1]);
                    showInput();
                  }}
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </motion.div>
              <motion.div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-6 fill-gray-700 cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z"
                    clip-rule="evenodd"
                  />
                  <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
