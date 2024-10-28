import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
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
              className="w-80 bg-white rounded-lg shadow-lg p-4 space-y-4"
            >
              <h2 className="text-gray-600 font-semibold">Transactions</h2>
              <div className="space-y-3">
                {transactions.map((transaction, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: prevTran?.name === transaction.name ? 1 : 0,
                    }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: prevTran?.name === transaction.name ? 1 : 0,
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                }}
                className="w-full bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-center py-2 rounded-md transition duration-500 ease-in-out"
              >
                All Transactions →
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
      className="w-80 bg-white rounded-lg shadow-lg p-4 space-y-4 pb-4"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        // className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
      >
        &times;
      </button>

      {/* Header */}
      <motion.div
        // layoutId={name}
        className=""
      >
        <motion.div
          className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full text-lg"
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
        <motion.hr className="border-gray-300" layout="position" />

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
