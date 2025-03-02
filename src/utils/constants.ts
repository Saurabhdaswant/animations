export const cardData = [
  {
    title: "Secret Recovery Phrase",
    description: "Import any wallet using a 12-word Secret Recovery Phrase.",
  },
  {
    title: "Private Key",
    description: "Import any wallet using a unique 64‑char Private Key.",
  },
  {
    title: "Existing Index",
    description: "Add other wallets from an existing Secret Phrase index.",
  },
];

export type WalletStep = "first" | "second" | "third";

export const swipeHorizontally = {
  initial: { opacity: 0, y: 0, x: 100, scale: 0.9 },
  animate: { opacity: 1, y: 0, x: 0, scale: 1 },
  exit: { opacity: 0, y: 0, x: 100 },
  transition: { duration: 0.3 },
};

export const fromFirstAnimation = {
  initial: { opacity: 0, y: 10, x: 0, scale: 0.9 },
  animate: { opacity: 1, y: 0, x: 0, scale: 1 },
  exit: { opacity: 0, y: 10, x: 0, scale: 0.9 },
  transition: { duration: 0.3 },
};

export const fromOtherAnimation = {
  initial: { opacity: 0, y: 0, x: -100 },
  animate: { opacity: 1, y: 0, x: 0, scale: 1 },
  exit: { opacity: 0, y: 0, x: -100 },
  transition: { duration: 0.3 },
};
