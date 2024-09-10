export default function Home() {
  return (
    <div className="flex flex-col  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className=" text-7xl">Framer Motion Crafts</h1>
        <p className="font-[family-name:var(--font-geist-mono)] text-xl">
          {" "}
          these animations are built by{" "}
          <strong className="text-blue-400">@daswantsaurabh</strong> for
          learning purpose
        </p>
        <div className="mt-10 w-full">
          {[...Array(4)].map((_, idx) => {
            return (
              <div key={idx} className="mt-10 space-y-4">
                <p className="font-[family-name:var(--font-geist-mono)]">
                  {" "}
                  {idx}. Family Happy Button Animation
                </p>
                <div className="rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-[50rem]  px-4 "></div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
