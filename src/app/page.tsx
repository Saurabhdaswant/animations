"use client";

import TagsContainer from "@/components/Bookmark";
import CalendarWidget from "@/components/CalendarWidget";
import FamilyButton from "@/components/FamilyButton";
import Screenshots from "@/components/Screenshots";
import Timer from "@/components/Timer";
import Transactions from "@/components/Transactions";
import Wallet from "@/components/Wallet";
import { WalletStepProvider } from "@/providers/WalletStepProvider";

export default function Home() {
  return (
    <div className="flex w-full md:w-[80%] mx-auto flex-col font-[family-name:var(--font-open-runde-medium)]  p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col text-[#2e2e2e] gap-4 row-start-2 items-center sm:items-start">
        <h1 className=" text-6xl font-[family-name:var(--font-open-runde-bold)] ">
          Crafts
        </h1>
        <p className=" text-3xl font-[family-name:var(--font-open-runde-medium)]">
          {" "}
          Check out animations {""}
          <a
            href="https://x.com/DaswantSaurabh"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400 space-x-1 cursor-pointer"
          >
            I
          </a>{" "}
          crafted while learning Framer Motion!{" "}
        </p>
        <div className="hidden md:block mt-10 w-full">
          <WalletStepProvider>
            <Wallet />
          </WalletStepProvider>
          <FamilyButton />
          <Transactions />
          <CalendarWidget />
          <Timer />
          <Screenshots />
          <TagsContainer />
        </div>
        <div className="md:hidden mt-10 w-full">
          <p className="text-center text-gray-500">
            This animation experience is best viewed on a larger screen. Please
            visit this site on a laptop or desktop computer for the full
            experience.
          </p>
        </div>
      </main>
    </div>
  );
}
