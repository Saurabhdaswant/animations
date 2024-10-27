import React, { useState } from "react";

import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
type Transaction = {
  icon: string;
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
    icon: "📄",
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
    icon: "📊",
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
    icon: "📄",
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
    icon: "🍔",
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

  const [elementRef, bounds] = useMeasure();

  return (
    <div className="mt-10 space-y-4">
      <p className="font-[family-name:var(--font-open-runde-bold)]">
        Transactions
      </p>
      <div className="rounded-xl border border-solid border-black/[.08] transition-colors flex items-center justify-center bg-white hover:border-transparent text-sm sm:text-base h-[30rem] px-4">
        <motion.div
          transition={{
            type: "ease",
            bounce: 0,
          }}
          animate={{ height: bounds.height + 10 }}
          className="w-80 bg-white rounded-lg shadow-lg p-4 space-y-4"
        >
          <div ref={elementRef} className="relative pb-4 ">
            {selectedTransaction ? (
              <TransactionDetail
                {...selectedTransaction}
                onClose={() => setSelectedTransaction(null)}
              />
            ) : (
              <>
                <h2 className="text-gray-600 font-semibold">Transactions</h2>
                <div className="space-y-3">
                  {transactions.map((transaction, index) => (
                    <motion.div
                      key={index}
                      layoutId={transaction.name}
                      onClick={() => setSelectedTransaction(transaction)}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                    >
                      <motion.div className="flex items-center space-x-3">
                        <motion.div
                          layout="position"
                          className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full text-lg"
                        >
                          {transaction.icon}
                        </motion.div>
                        <motion.div layout="position">
                          <motion.p
                            layout="position"
                            className="text-gray-800 font-medium"
                          >
                            {transaction.name}
                          </motion.p>
                          <motion.p
                            layout="position"
                            className="text-gray-500 text-sm"
                          >
                            {transaction.category}
                          </motion.p>
                        </motion.div>
                      </motion.div>
                      <motion.p
                        layout="position"
                        className="text-gray-800 font-semibold"
                      >
                        {transaction.amount}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>
                <button className="w-full text-blue-600 font-semibold hover:underline text-center py-2">
                  All Transactions →
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Transactions;

type TransactionDetailProps = {
  icon: string;
  name: string;
  category: string;
  amount: string;
  transactionId: string;
  date: string;
  time: string;
  paymentMethod: string;
  cardNumber: string;
  onClose: () => void;
};

const TransactionDetail: React.FC<TransactionDetailProps> = ({
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
    <>
      {/* Close Button */}
      <button
        onClick={onClose}
        // className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
      >
        &times;
      </button>

      {/* Header */}
      <motion.div className="flex items-center justify-between">
        <motion.div className="flex items-center space-x-3">
          <motion.div
            className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full text-lg"
            layoutId={`${name}-icon`}
          >
            {icon}
          </motion.div>
          <motion.div layoutId={`${name}-details`}>
            <motion.p
              className="text-gray-800 font-medium"
              // layoutId={`${name}-name`}
            >
              {name}
            </motion.p>
            <motion.p
              className="text-gray-500 text-sm"
              // layoutId={`${name}-category`}
              layout="position"
            >
              {category}
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.p className="text-gray-800 font-semibold" layout="position">
          {amount}
        </motion.p>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        className=" mt-4"
        transition={{ type: "spring", bounce: 0 }}
      >
        <motion.hr className="border-gray-300" />

        {/* Details */}
        <motion.div className="space-y-1 mt-4">
          <motion.p className="text-gray-500 text-sm">
            #{transactionId}
          </motion.p>
          <motion.p className="text-gray-500 text-sm">{date}</motion.p>
          <motion.p className="text-gray-500 text-sm">{time}</motion.p>
        </motion.div>

        {/* Payment Method */}
        <motion.div className="mt-4">
          <motion.p className="text-gray-500 text-sm">
            Paid Via {paymentMethod}
          </motion.p>
          <motion.p className="text-gray-800 font-semibold">
            {cardNumber}{" "}
            {paymentMethod !== "Cash" && (
              <motion.span className="font-medium text-sm">VISA</motion.span>
            )}
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
};
