const Onboarding = () => {
  return (
    <section className="w-full mt-35 flex">
      <div className="flex flex-row w-full items-center px-10 gap-28 justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-[#263238]">
            Fresh, Creamy & <br /> Delicious Yoghurt
          </h1>
          <p className="text-2xl text-[#6B7280]">
            Taste the goodness of natural ingredients in <br/>every scoop. Discover
            our hand-crafted<br/> yoghurt, made daily with love and care.
          </p>
          <div className="flex flex-row mt-2 gap-5">
            <div className="py-2 px-7 border border-[#FF6666] rounded-md text-[#FF6666] flex flex-row gap-2 hover:shadow-2xl cursor-pointer hover:bg-[#FF6666] hover:text-white">
              <p className="w-fit">Shop Now</p>
              <img src="./svg/arrow_icon.svg" className="hidden" />
            </div>
            <div className="py-2 px-8 border border-[#FF6666] rounded-md text-[#FF6666] cursor-pointer hover:bg-[#FF6666] hover:text-white hover:shadow-2xl">
              Learn More
            </div>
          </div> 
        </div>
        <img src="./svg/logo_yess_yogurt.svg" className="h-auto w-[40%]" />
      </div>
    </section>
  );
};

export default Onboarding;
