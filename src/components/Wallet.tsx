import React from "react";
import { CreditCardIcon, PencilIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import { EllipsisVertical } from "lucide-react";

const FirstScreen = ({ cardData, setScreen }: any) => (
  <div className="h-full">
    <motion.div
      layoutId="green-card"
      layout="position"
      className="bg-[#57dc5c] rounded-[20px] p-4 text-white w-[75%] mt-20 rounded-b-none mx-auto h-36 "
    ></motion.div>
    <div className="p-8 pt-0 border-t border-[#E4E4E4] h-full shadow-[0_-10px_130.4px_10px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col my-9 items-center">
        <motion.h2
          layout="position"
          className="text-[#1E1E1E] font-semibold text-xl"
        >
          Add an Existing Wallet
        </motion.h2>

        <p className="text-[#A6A6A6] mt-1.5 text-center">
          Choose how you’d like to import an existing wallet into Family.{" "}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {cardData.map((card: any, index: any) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
            key={index}
            onClick={() => setScreen("second")}
            className="bg-[#FBFBFD] flex items-center justify-between border border-[#F7F7F7] gap-3.5 rounded-[20px] p-4"
          >
            <div className="flex items-start gap-3">
              <div className="bg-green-500 rounded-full w-fit p-2 flex items-center justify-center">
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
              <EllipsisVertical className="text-[#A3A2A4] w-5 h-5" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const SecondScreen = ({ setScreen }: any) => (
  <div className="h-full flex flex-col justify-between">
    <div>
      <div className="p-8">
        <motion.h2
          layout="position"
          className=" mt-11  text-[#1E1E1E] font-semibold text-xl"
        >
          Import Wallet
        </motion.h2>

        <p className="text-[#A6A6A6] mt-1.5 ">
          Enter your Secret Recovery Phrase to import your wallet securely.
        </p>
      </div>
      <motion.div
        layoutId="green-card"
        layout="position"
        onClick={() => setScreen("first")}
        className="bg-[#57dc5c] mt-10 rounded-[20px] p-4 text-white w-[90%] mx-auto h-[13rem]"
      ></motion.div>

      <div className="flex items-center mt-6 justify-center space-x-2">
        <div className="flex-1 border-b border-gray-100"></div>

        <button className="inline-flex items-center gap-2 text-sm font-medium text-[#A6A6A6]">
          <PencilIcon className="w-4 h-4" />
          Input Manually
        </button>

        <div className="flex-1 border-b border-gray-100"></div>
      </div>
    </div>

    <div>
      <div className=" mt-10   mb-5 p-4 border-2 border-dashed border-gray-100 mx-auto w-[90%] rounded-3xl">
        <p className="text-[#A6A6A6]   text-xs text-center">
          After entering your Secret Recovery Phrase, you’ll be able to continue
          the importing process.
        </p>
      </div>
      <div className="bg-[#57dc5c] opacity-0 mt-5 rounded-full p-4 text-white w-[90%]   mx-auto h-10 "></div>
    </div>
  </div>
);

const ThirdScreen = ({ setScreen }: any) => (
  <div className="h-full p-8">
    <motion.div
      layoutId="green-card"
      layout="position"
      className="bg-[#d5f7de] -mt-4 rounded-lg p-4 text-white w-5 h-5 mx-auto"
    ></motion.div>

    <div className="">
      <motion.h2
        layout="position"
        className=" mt-[28px]  text-[#1E1E1E] font-semibold text-xl"
      >
        Enter Your Phrase
      </motion.h2>

      <p className="text-[#A6A6A6] mt-1.5 ">
        Enter your Secret Recovery Phrase in its exact order, from word 1‑12.
      </p>
    </div>

    <div className="bg-[#F8F8FA] border-[6px] border-white shadow-2xl mt-20 rounded-xl p-4 text-white w-full h-14 mx-auto"></div>

    <div className=" mt-10   mb-5 p-4   mx-auto w-[90%] rounded-3xl">
      <p className="text-[#A6A6A6]   text-xs text-center">
        Enter your first word to continue.
      </p>
    </div>
  </div>
);

const Wallet = () => {
  const [screen, setScreen] = React.useState<"first" | "second" | "third">(
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
      title: "Existing Index ",
      description: "Add other wallets from an existing Secret Phrase index.",
    },
  ];

  return (
    <div className="mt-10 space-y-4 relative">
      <p className="font-[family-name:var(--font-open-runde-bold)]">
        Transactions
      </p>

      <div className="rounded-xl absolute -mr-20 pb-10  gap-2 border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:border-transparent text-sm sm:text-base px-4">
        <div className="flex items-center h-[750px] justify-center gap-4 w-96 bg-white border border-slate-100 rounded-3xl shadow-lg overflow-hidden space-y-4">
          <AnimatePresence mode="wait">
            {screen === "first" && (
              <FirstScreen cardData={cardData} setScreen={setScreen} />
            )}
            {screen === "second" && <SecondScreen setScreen={setScreen} />}
            {screen === "third" && <ThirdScreen setScreen={setScreen} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
