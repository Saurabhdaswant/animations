"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type CardProps = {
  id: string;
  color: string;
  index: number;
  clickedId: string | null;
  setClickedId: React.Dispatch<React.SetStateAction<string | null>>;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;

};

const colorClasses: { [key: string]: string } = {
  purple: "bg-purple-400",
  orange: "bg-orange-400",
  blue: "bg-blue-400",
  green: "bg-green-400",
};


function Card({ id, color, index, clickedId, setClickedId, isClicked, setIsClicked, }: CardProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const offsets: Record<string, string[]> = {
    initial: ["left-[30rem]", "left-[42rem]", "left-[54rem]", "left-[66rem]"],
    purple: ["left-[30rem]", "left-[60rem]", "left-[84rem]", "left-[106rem]"],
    orange: ["left-[0rem]", "left-[30rem]", "left-[64rem]", "left-[86rem]"],
    blue: ["left-[-30rem]", "left-[0rem]", "left-[30rem]", "left-[66rem]"],
    green: ["left-[-60rem]", "left-[-30rem]", "left-[0rem]", "left-[30rem]"],
  };


  const cardVariants = {
    static: {
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    clicked: {
      scale: 2,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClicked(false);
        setClickedId(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setClickedId]);

  return (
    <motion.div
      ref={ref}
      onClick={() => {
        setClickedId(id);
        setIsClicked(true);
      }}
      layout
      custom={index}
      variants={cardVariants}
      initial="static"
      animate={isClicked && clickedId === id ? "clicked" : "static"}
      className={` rounded-2xl min-h-44 w-44 absolute  top-[calc(50%-88px)] text-center ${colorClasses[color]} ${clickedId === id ? offsets[clickedId as string][index] : isClicked ? `opacity-35 ${offsets[clickedId as string][index]}` : offsets["initial"][index]}`}
    >
    </motion.div>
  );
}

export default function Page() {
  const layoutIds = [
    { id: "purple", color: "purple", },
    { id: "orange", color: "orange" },
    { id: "blue", color: "blue" },
    { id: "green", color: "green" },
  ];

  const [clickedId, setClickedId] = React.useState<string | null>(null);
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <>
      <div className={` h-screen overflow-hidden relative  `}>
        {layoutIds.map(({ id, color }, index) => (
          <Card
            key={id}
            id={id}
            color={color}
            index={index}
            clickedId={clickedId}
            setClickedId={setClickedId}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        ))}
      </div>
      <AnimatePresence mode="popLayout">
        {
          isClicked && (
            <motion.div
              className="absolute top-0 right-0 bg-black/20 h-full w-full max-w-[30%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )
        }
      </AnimatePresence>


    </>
  );
}
