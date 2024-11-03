import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Film, X } from "react-feather";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
} from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
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

const Transactions = () => {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [prevTran, setPrevTran] = useState<Transaction | null>(null);

  return (
    <div className="mt-10 space-y-4">
      <p className="font-[family-name:var(--font-open-runde-bold)]">
        Transactions
      </p>

      <div className="rounded-xl border border-solid border-black/[.08] transition-colors flex items-center justify-center bg-white hover:border-transparent text-sm sm:text-base h-[30rem] px-4">
        <AnimatePresence>
          {selectedTransaction ? (
            <TransactionDetail
              {...selectedTransaction}
              onClose={() => {
                setSelectedTransaction(null);
              }}
            />
          ) : (
            <motion.div
              layoutId="dad"
              className="w-80 bg-white border border-slate-100 rounded-3xl shadow-lg p-5 space-y-4"
            >
              <motion.h2
                layout="position"
                className="text-[#2e2e2e] font-semibold text-lg"
              >
                Transactions
              </motion.h2>
              <div className="space-y-3">
                {transactions.map((transaction, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: prevTran?.name === transaction.name ? 1 : 0,
                      // filter:
                      //   prevTran?.name === transaction.name
                      //     ? "blur(0px)"
                      //     : "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,

                      // filter: "blur(0px)"
                    }}
                    exit={{
                      opacity: prevTran?.name === transaction.name ? 1 : 0,
                      // filter:
                      //   prevTran?.name === transaction.name
                      //     ? "blur(0px)"
                      //     : "blur(4px)",
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    onClick={() => {
                      setSelectedTransaction(transaction);
                      setPrevTran(transaction);
                    }}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  >
                    <motion.div className="flex items-center space-x-3">
                      <motion.div
                        layoutId={`${transaction.name}-icon`}
                        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full text-lg"
                      >
                        {transaction.icon}
                      </motion.div>
                      <motion.div>
                        <motion.p
                          layoutId={`${transaction.name}-name`}
                          className="text-gray-800 font-medium"
                        >
                          {transaction.name}
                        </motion.p>
                        <motion.p
                          layoutId={`${transaction.name}-category`}
                          className="text-gray-500 text-sm"
                        >
                          {transaction.category}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                    <motion.p
                      layoutId={`${transaction.name}-amount`}
                      className="text-gray-800 font-semibold"
                    >
                      {transaction.amount}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
              <motion.button
                layout="position"
                style={{
                  padding: "10px 0",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.8,
                }}
                className="w-full rounded-full space-x-2 flex items-center justify-center bg-black text-white font-semibold hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 text-center   transition duration-500 ease-in-out"
              >
                <ArrowRight size={22} />
                <span> All Transactions</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Transactions;

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
      <motion.div
        // layoutId={name}
        className=""
      >
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
        // layout="position"
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
