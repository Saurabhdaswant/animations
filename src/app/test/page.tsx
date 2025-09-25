"use client";
import { AnimatePresence, delay, motion } from "framer-motion";
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
  purple: "bg-purple-500  ",
  orange: "bg-orange-500  ",
  blue: "bg-blue-500  ",
  green: "bg-green-500  ",
};


function Card({ id, color, index, clickedId, setClickedId, isClicked, setIsClicked, }: CardProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const offsets: Record<string, string[]> = {
    initial: ["left-[30rem]", "left-[42rem]", "left-[54rem]", "left-[66rem]"],
    purple: ["left-[26rem]", "left-[60rem]", "left-[84rem]", "left-[106rem]"],
    orange: ["left-[0rem]", "left-[26rem]", "left-[64rem]", "left-[86rem]"],
    blue: ["left-[-30rem]", "left-[0rem]", "left-[26rem]", "left-[66rem]"],
    green: ["left-[-60rem]", "left-[-30rem]", "left-[0rem]", "left-[26rem]"],
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

  if (clickedId === id) {
    return <motion.div
      ref={ref}
      onClick={() => {
        setClickedId(id);
        setIsClicked(true);
      }}
      animate={{ rotate: [0, 5, -5], y: [0, -5, 0],  }}
      transition={{
        type: "spring",
        ease: "easeOut",
        bounce: 0.15,
        duration: 0.7,

        rotate: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
        y: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      }}
      layoutId={id}
      style={{
        borderRadius: 30,
      }}
      className={`h-[22rem] cursor-pointer w-[22rem] absolute  top-[calc(50%-176px)] text-center ${colorClasses[color]} ${clickedId === id ? offsets[clickedId as string][index] : isClicked ? `opacity-35 transition-opacity ${offsets[clickedId as string][index]}` : offsets["initial"][index]} `}
    >
    </motion.div>
  } else return (
    <motion.div
      ref={ref}
      onClick={() => {
        setClickedId(id);
        setIsClicked(true);
      }}
      layoutId={id}
      style={{
        borderRadius: 26,
      }}
      animate={{ y: [0, -5, 0], rotate: 0 }}
      transition={{
        type: "spring",
        ease: "easeOut",
        duration: 0.7,
        bounce: 0.15,

        y: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      }}
      className={` cursor-pointer min-h-44 w-44 absolute  top-[calc(50%-88px)] text-center ${colorClasses[color]} ${clickedId === id ? offsets[clickedId as string][index] : isClicked ? `opacity-35 transition-opacity ${offsets[clickedId as string][index]}` : offsets["initial"][index]}`}
    >
    </motion.div>
  );
}

export default function Page() {
  const layoutIds = [
    { id: "purple", color: "purple", desc: "Purple is often associated with creativity, mystery, and royalty. Historically, it was a rare and expensive dye, which is why it’s tied to luxury and exclusivity. In modern design, purple conveys imagination, spirituality, and sophistication. It sits between blue and red on the spectrum, giving it both a calming stability and a sense of energy, depending on how it’s used. Darker shades feel regal and deep, while lighter tints like lavender give a soft, calming effect. From a practical design perspective, purple is powerful when used for branding and UI elements that aim to stand out without being overly aggressive. It pairs well with neutral backgrounds like gray or black, and can be contrasted with gold, white, or mint for a striking visual balance. Because it’s not as common as blue or green, purple tends to make designs look more unique and memorable." },
    { id: "orange", color: "orange", desc: "Orange radiates warmth, energy, and enthusiasm. It’s a mix of red’s intensity and yellow’s cheerfulness, making it feel playful yet bold. It often evokes feelings of creativity, youthfulness, and adventure. Unlike red, which can feel aggressive, orange tends to be more inviting and friendly, making it a great color for grabbing attention without intimidation. In design, orange works beautifully for calls-to-action (like buttons or highlights) because it draws the eye naturally. It’s also used in branding when a company wants to appear approachable, innovative, or energetic. Balanced with darker tones like navy or charcoal, orange pops in a modern and stylish way. Its versatility makes it useful for everything from entertainment to food-related brands." },
    { id: "blue", color: "blue" ,desc: "Blue symbolizes trust, stability, and calmness. It’s one of the most universally liked colors because it feels safe and dependable, like the sky or ocean. Lighter shades of blue feel airy and refreshing, while darker blues feel strong and professional. This is why blue dominates industries like tech, finance, and healthcare—it communicates reliability and peace of mind. For designers, blue provides a solid base color for both digital and print applications. It pairs beautifully with white for clean minimalism or with orange/yellow for a more dynamic contrast. Since blue is easy on the eyes, it’s often used for large backgrounds, dashboards, and interfaces where users will spend a lot of time. It helps reduce visual strain while still giving a sense of professionalism." },
    { id: "green", color: "green",desc: "Green represents growth, harmony, and balance. It’s tied closely to nature, symbolizing freshness, renewal, and health. Light greens feel calming and restorative, while richer, darker greens give a sense of wealth, stability, and tradition. Psychologically, green often brings peace and reassurance, making it an excellent choice for designs that aim to relax or inspire confidence. In practice, green is heavily used in sustainability, wellness, and financial industries because of its dual associations with nature and prosperity. It pairs nicely with earthy tones like brown and beige for an organic feel, or with gold and navy for a more luxurious effect. In UI, green is also widely used to indicate success states, progress, and positive actions, making it both functional and visually appealing."  },
  ];

  const [clickedId, setClickedId] = React.useState<string | null>(null);
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <>
      <div className={` h-screen overflow-hidden bg-black relative  `}>
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
              className="absolute top-0 p-14 right-0 bg-[#0f0f0f] h-full w-full max-w-[30%]"
              initial={{ opacity: 0 ,  }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0   }}
              transition={{ opacity: { delay:0.2 } }}
            >
              <h1 className="text-4xl font-bold text-white capitalize mb-4">{clickedId}</h1>
              <p className="text-white">
{
                layoutIds.find(item => item.id === clickedId)?.desc || ''
}              </p>
            </motion.div>
          )
        }
      </AnimatePresence>


    </>
  );
}
