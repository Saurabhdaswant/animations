import React, { createContext, useState } from "react";
import { WalletStep } from "@/utils/constants";

interface WalletStepContextValue {
  currentStep: WalletStep;
  setCurrentStep: React.Dispatch<React.SetStateAction<WalletStep>>;
  nextStep: WalletStep;
  setNextStep: React.Dispatch<React.SetStateAction<WalletStep>>;
  prevStep: WalletStep;
  setPrevStep: React.Dispatch<React.SetStateAction<WalletStep>>;
}

export const WalletStepContext = createContext<WalletStepContextValue>({
  currentStep: "first",
  setCurrentStep: () => {},
  nextStep: "first",
  setNextStep: () => {},
  prevStep: "first",
  setPrevStep: () => {},
});

export const WalletStepProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState<WalletStep>("first");
  const [nextStep, setNextStep] = useState<WalletStep>("first");
  const [prevStep, setPrevStep] = useState<WalletStep>("first");

  const value = {
    currentStep,
    setCurrentStep,
    nextStep,
    setNextStep,
    prevStep,
    setPrevStep,
  };

  return (
    <WalletStepContext.Provider value={value}>
      {children}
    </WalletStepContext.Provider>
  );
};

export const useWalletStep = () => {
  const context = React.useContext(WalletStepContext);
  if (context === undefined) {
    throw new Error("useWalletStep must be used within a WalletStepProvider");
  }
  return context;
};
