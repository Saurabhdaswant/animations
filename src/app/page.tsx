"use client";

import FamilyButton from "@/components/FamilyButton";

export default function Home() {
  return (
    <div className="flex w-full md:w-[80%] mx-auto flex-col font-[family-name:var(--font-open-runde-bold)]  p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col text-[#2e2e2e] gap-4 row-start-2 items-center sm:items-start">
        <h1 className=" text-6xl ">Crafts</h1>
        <p className=" text-3xl">
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
        <div className="mt-10 w-full">
          <FamilyButton />
        </div>
      </main>
    </div>
  );
}
