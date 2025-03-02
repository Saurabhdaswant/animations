import React from "react";
import SecondBlueCard from "./SecondBlueCard";
import InputManuallyButton from "./InputManuallyButton";
import { useWalletStep } from "@/providers/WalletStepProvider";

export default function SecondMain() {
  const { currentStep } = useWalletStep();
  return (
    <>
      {currentStep === "second" && (
        <div className="h-[12rem] relative">
          <div className=" absolute -top-32 w-full">
            <SecondBlueCard />
            <InputManuallyButton />
          </div>
        </div>
      )}
    </>
  );
}
