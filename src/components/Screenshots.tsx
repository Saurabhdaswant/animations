import { PhotoIcon } from "@heroicons/react/16/solid";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Chrome } from "react-feather";

const screenshots = [
  "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
];

const ScreenshotItem = ({ screenshot, onScreenshotClick }: any) => {
  const handleClick = () => {
    onScreenshotClick(screenshot);
  };

  return (
    <motion.span
      onClick={handleClick}
      layoutId={screenshot}
      className="relative h-40 min-w-60 cursor-pointer  text-xs font-medium"
    >
      <img
        src={screenshot}
        style={{ borderRadius: "6px" }}
        alt="Screenshot"
        className="absolute inset-0 h-full w-full  object-cover"
      />
    </motion.span>
  );
};

export default function Screenshots() {
  const [showImg, setShowImg] = useState(false);
  const [currentScreenshot, setCurrentScreenshot] = useState<string | null>(
    null
  );
  const [showExtension, setShowExtension] = useState(false);

  const handleScreenshotClick = (screenshot: string) => {
    setShowImg(true);
    setCurrentScreenshot(screenshot);
  };

  const handleOverlayClick = () => {
    setShowImg(false);
    setCurrentScreenshot(null);
  };

  const handleExtensionToggle = () => {
    setShowExtension(true);
  };

  return (
    <div className="mt-10 space-y-4">
      <p className="font-[family-name:var(--font-open-runde-bold)]">
        Screenshots
      </p>
      <div className="rounded-xl border border-solid border-black/[.08] transition-colors flex items-center justify-center bg-white hover:border-transparent text-sm sm:text-base h-[30rem] px-4">
        <div
          style={{ position: "relative" }}
          onClick={handleExtensionToggle}
          onBlur={() => setShowExtension(false)}
          tabIndex={0}
        >
          <AnimatePresence>
            {showImg && currentScreenshot && (
              <div className="fixed inset-0 z-30 flex h-full w-full items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  }}
                  onClick={handleOverlayClick}
                  className="fixed inset-0 z-40 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
                />
                <motion.div
                  layoutId={currentScreenshot}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 0.5,
                  }}
                  className="absolute z-50 h-[80%] w-[80%] "
                >
                  <img
                    style={{ borderRadius: "6px" }}
                    src={currentScreenshot}
                    alt="Screenshot"
                    className="absolute inset-0 h-full w-full  object-contain"
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
          <PhotoIcon className="cursor-pointer text-gray-600 w-6 h-6" />
          <AnimatePresence>
            {showExtension && (
              <motion.div
                layout
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.3,
                }}
                initial={{
                  opacity: 0,
                  filter: "blur(4px)",
                  y: 5,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  filter: "blur(4px)",
                  y: 5,
                  scale: 0.97,
                }}
                className="left-50% absolute top-4 z-10 h-fit w-fit translate-x-[-90%] transform rounded-lg border border-gray-200 bg-white p-2 text-black shadow-lg"
              >
                <div className="h-fit">
                  <div className="space-y-1.5 text-xs text-black">
                    <div className="flex w-[250px] items-center gap-4 overflow-auto p-2">
                      {screenshots.map((screenshot, idx) => (
                        <ScreenshotItem
                          key={idx}
                          screenshot={screenshot}
                          onScreenshotClick={handleScreenshotClick}
                        />
                      ))}
                    </div>
                    <p className="whitespace-nowrap px-2 py-1">
                      {new Date().toLocaleString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
