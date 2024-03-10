import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <img src="/images/bgimage.png" alt="leafy background" className="w-full h-auto" />
      <div className="absolute top-2 md:top-1/4 text-white text-xl md:text-5xl lg:text-6xl xl:text-7xl ml-4 md:ml-20">
        <h1 className="w-full md:w-[640px] font-bold">Save the environment today for a better tomorrow</h1>
        <div className="flex items-center gap-2 mt-4">
          <button className="bg-white px-2 py-1 md:px-6 md:py-3  font-semibold rounded-md text-lg text-black">What we do</button>
          <button className="px-2 py-1 md:px-6 md:py-3 font-base rounded-sm text-lg text-white">
            <i className="ri-play-circle-fill text-2xl md:text-4xl mr-3"></i>
            Play Video
          </button>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex text-white justify-between items-center text-lg w-full bottom-5 px-4 md:px-20 absolute ">
          <div>
            <p className="font-semibold">23,800 trees planted</p>
          </div>
          <div className="bg-white h-0 flex-grow px-2 md:px-5">
            <hr className="bg-white h-0.5 w-full" />
          </div>
          <div>
            <p className="font-semibold text-sm md:text-base">5,840 donations collected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
