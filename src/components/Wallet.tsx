import BottomSection from "./WalletComp/BottomSecttion";
import FirstStep from "./WalletComp/FirstStep";
import ThirdBlueCard from "./WalletComp/ThirdBlueCard";
import WalletCore from "./WalletComp/WalletCore";
import WalletHeader from "./WalletComp/WalletHeader";

const Wallet = () => {
  return (
    <div className="mt-10 space-y-4 relative">
      <p className="font-[family-name:var(--font-open-runde-bold)]">Wallet</p>
      <div className="rounded-xl border border-solid border-black/[.08] transition-colors flex items-center justify-center bg-white hover:border-transparent text-sm sm:text-base py-10 px-4">
        <div className="flex relative items-center h-[750px] justify-center gap-4 w-96 bg-white border border-slate-100 rounded-3xl shadow-lg overflow-hidden space-y-4">
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col  h-full justify-end">
              <WalletHeader />
              <ThirdBlueCard />
              <FirstStep />
              <WalletCore />
              <BottomSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
