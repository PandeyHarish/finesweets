import React, { useState } from "react";
import image from "./images/banner.png";
import VolunteerModal from "./VolunteerModal";

const CTABanner = () => {
  const [display, setDisplay] = useState(false);
  const showHide = () => {
    setDisplay((prevState) => !prevState);
  };
  return (
    <>
      <div className="relative rounded-lg md:bg-cover   shadow-lg text-white mx-4 md:mx-10 my-10 bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>
        <div className="h-[384px] md:h-[421px] opacity-10 bg-black"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="px-4 md:px-6 py-4 text-center md:text-left">
            <div className="font-bold text-xl md:text-3xl mb-2 max-w-[631px]">You can contribute to making the environment greener!</div>
            <div className="pt-6 pb-2 z-10">
              <button className="bg-[#70C174] text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded text-base md:text-lg" onClick={showHide}>
                Join as a volunteer
              </button>
              <button className="ml-3 md:ml-5 mt-4 md:mt-0 bg-white text-black font-bold py-2 md:py-3 px-4 md:px-6 rounded text-base md:text-lg">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
      <VolunteerModal display={display} func={showHide} />
    </>
  );
};

export default CTABanner;
