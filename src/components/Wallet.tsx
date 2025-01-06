import React from "react";

import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  VideoCameraIcon,
  CreditCardIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { EllipsisVertical } from "lucide-react";
import { ArrowRight, X } from "react-feather";

type Transaction = {
  icon: any;
  name: string;
  category: string;
  amount: string;
  transactionId?: string;
  date?: string;
  time?: string;
  paymentMethod?: string;
  cardNumber?: string;
};

const transactions: Transaction[] = [
  {
    icon: <VideoCameraIcon className="w-6 h-6" />,
    name: "Netflix",
    category: "Subscription",
    amount: "-$6.99",
    transactionId: "67593",
    date: "September 26",
    time: "12:01 am",
    paymentMethod: "Credit Card",
    cardNumber: "XXXX 9342",
  },
  {
    icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
    name: "Verizon",
    category: "Mobile Recharge",
    amount: "-$4.05",
    transactionId: "76453",
    date: "September 27",
    time: "3:15 pm",
    paymentMethod: "Debit Card",
    cardNumber: "XXXX 1234",
  },
  {
    icon: <ComputerDesktopIcon className="w-6 h-6" />,
    name: "Rive",
    category: "Subscription",
    amount: "-$32.00",
    transactionId: "12876",
    date: "September 28",
    time: "10:30 am",
    paymentMethod: "Credit Card",
    cardNumber: "XXXX 9342",
  },
  {
    icon: <ShoppingBagIcon className="w-6 h-6" />,
    name: "Big Belly Burger",
    category: "Restaurant",
    amount: "-$12.05",
    transactionId: "34895",
    date: "September 29",
    time: "8:00 pm",
    paymentMethod: "Cash",
    cardNumber: "",
  },
];

const Wallet = () => {
  const [screen, setScreen] = React.useState<"first" | "second" | "third">(
    "first"
  );

  // useEffect(() => {
  //   const states = ["first", "second", "third"];
  //   let index = 0;
  //   const intervalId = setInterval(() => {
  //     setScreen(states[index] as any);
  //     index = (index + 1) % states.length;
  //   }, 2000);

  //   return () => clearInterval(intervalId);
  // }, []);

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
    <div className="mt-10 space-y-4">
      <p className="font-[family-name:var(--font-open-runde-bold)]">
        Transactions
      </p>

      <div className="rounded-xl  border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:border-transparent text-sm sm:text-base h-[30rem] px-4">
        <motion.div
          layoutId="dad"
          className="flex items-center justify-center  gap-4 w-96 bg-white border border-slate-100 rounded-3xl shadow-lg overflow-hidden  space-y-4"
        >
          {screen === "first" && (
            <div>
              <div className="bg-[#57dc5c] rounded-[20px] p-4 text-white w-[75%] mt-20 rounded-b-none mx-auto h-36 "></div>
              <div className="p-8 pt-0 border-t border-[#E4E4E4]  shadow-[0_-10px_130.4px_10px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col my-9 items-center">
                  <motion.h2
                    layout="position"
                    className="text-[#1E1E1E] font-semibold text-xl"
                  >
                    Add an Existing Wallet
                  </motion.h2>

                  <p className="text-[#A6A6A6] mt-1.5 text-center">
                    Choose how you’d like to import an existing wallet into
                    Family.{" "}
                  </p>
                </div>

                <div className="flex flex-col   gap-4">
                  {cardData.map((card, index) => (
                    <div
                      key={index}
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
                          <p className="text-sm text-[#A3A2A4]">
                            {card.description}
                          </p>
                        </div>
                      </div>
                      <div className="-mr-1.5">
                        <EllipsisVertical className="text-[#A3A2A4] w-5 h-5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {screen === "second" && (
            <div>
              <div className="">
                <motion.h2
                  layout="position"
                  className="text-[#2e2e2e] font-semibold text-lg"
                >
                  Transactions
                </motion.h2>

                <p className="text-gray-600 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-green-500 rounded-lg p-4 text-white w-full h-36"></div>

              <p className="text-gray-600 mt-10 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          )}
          {screen === "third" && (
            <div>
              <div className="bg-green-500 rounded-lg p-4 text-white w-5 h-5 mx-auto"></div>

              <div className="">
                <motion.h2
                  layout="position"
                  className="text-[#2e2e2e] font-semibold text-lg"
                >
                  Transactions
                </motion.h2>

                <p className="text-gray-600 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 text-white w-full h-14 mx-auto"></div>

              <p className="text-gray-600 mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Wallet;

const TransactionDetail: React.FC<any> = ({
  icon,
  name,
  category,
  amount,
  transactionId,
  date,
  time,
  paymentMethod,
  cardNumber,
  onClose,
}) => {
  return (
    <motion.div
      onClick={onClose}
      layoutId="dad"
      className="w-80 bg-white relative border border-slate-100 rounded-3xl shadow-lg p-5 pt-0 space-y-4"
    >
      {/* Close Button */}
      <motion.div
        layout="position"
        className="cursor-pointer absolute right-4 top-4 p-1.5 bg-gray-100 rounded-full"
      >
        <X
          onClick={onClose}
          size={18}
          strokeWidth={3}
          className="text-gray-800 "
        />
      </motion.div>

      {/* Header */}
      <motion.div>
        <motion.div
          className="w-10 mt-0 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full text-lg"
          layoutId={`${name}-icon`}
        >
          {icon}
        </motion.div>
        <div className="flex items-center justify-between mt-2">
          <motion.div className="flex items-center space-x-3">
            <motion.div layoutId={`${name}-details`}>
              <motion.p
                className="text-gray-800 font-medium"
                layoutId={`${name}-name`}
              >
                {name}
              </motion.p>
              <motion.p
                className="text-gray-500 text-sm"
                layoutId={`${name}-category`}
                layout="position"
              >
                {category}
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.p
            layoutId={`${name}-amount`}
            className="text-gray-800 font-semibold"
          >
            {amount}
          </motion.p>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        className=" mt-4"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", bounce: 0 }}
      >
        <motion.hr
          className="  border-dashed border-gray-300"
          layout="position"
        />

        {/* Details */}
        <motion.div className="space-y-1 mt-4" layout="position">
          <motion.p className="text-gray-500 text-sm" layout="position">
            #{transactionId}
          </motion.p>
          <motion.p className="text-gray-500 text-sm" layout="position">
            {date}
          </motion.p>
          <motion.p className="text-gray-500 text-sm" layout="position">
            {time}
          </motion.p>
        </motion.div>

        {/* Payment Method */}
        <motion.div className="mt-4" layout="position">
          <motion.p className="text-gray-500 text-sm" layout="position">
            Paid Via {paymentMethod}
          </motion.p>
          <motion.p className="text-gray-800 font-semibold" layout="position">
            {cardNumber}{" "}
            {paymentMethod !== "Cash" && (
              <motion.span className="font-medium text-sm" layout="position">
                VISA
              </motion.span>
            )}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
