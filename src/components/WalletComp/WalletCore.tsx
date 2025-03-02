import React from "react";
import Toptitles from "./Toptitles";
import SecondMain from "./SecondMain";
import ThirdMain from "./ThirdMain";

export default function WalletCore() {
  return (
    <div className="mt-36 px-4 ">
      <Toptitles />

      <SecondMain />
      <ThirdMain />
    </div>
  );
}
