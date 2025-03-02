import { CreditCardIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { EllipsisVertical } from "lucide-react";

export default function CardItem({
  setCurrentStep,
  setNextStep,
  setPrevStep,
  card,
}: any) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      whileTap={{
        scale: 0.95,
        background: "#F4F4F6",
      }}
      onClick={() => setCurrentStep("second")}
      onMouseOver={() => {
        setNextStep("second");
        setPrevStep("first");
      }}
      className="bg-[#FBFBFD] cursor-pointer flex items-center justify-between border border-[#F7F7F7] gap-3.5 rounded-[20px] p-4"
    >
      <div className="flex items-start gap-3">
        <div className="bg-[#54B7F9] rounded-full w-fit p-2 flex items-center justify-center">
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
        <EllipsisVertical className="text-[#a3a2a465] w-5 h-5" />
      </div>
    </motion.div>
  );
}
