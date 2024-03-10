import React from "react";
const Aboutus = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-0 my-20">
        <div className="flex flex-col md:flex-row">
          {/* about section */}
          <div className="flex-1 mt-5 md:mt-16 lg:mt-24">
            {/* section title */}
            <div className="flex  items-center gap-0  w-auto  ">
              <div className="bg-[#1d2130] h-0 flex-grow">
                <hr className="bg-[#1d2130] h-1 w-[64px]" />
              </div>
              <div>
                <p className="text-sm lg:text-base font-semibold">Know More About Us</p>
              </div>
            </div>

            <div className="mt-8 md:ml-16">
              <h3 className=" text-xl md:text-2xl lg:text-5xl text-[#1d2130] font-semibold">We help nature smile and survive everywhere</h3>
              <div className="text-[#525560] mt-8 text-sm lg:text-base leading-6 text-justify">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit earum dolore, eligendi facere temporibus!</p>
                <p className="mt-10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed cum veritatis architecto consequuntur aliquid? Quisquam, in deserunt
                  unde recusandae sequi sed, odit asperiores quae eligendi consequatur voluptate nostrum rerum? Eaque!
                </p>
              </div>
              <button className="mt-5 px-2 py-1 md:px-8 md:py-4 bg-[#70C174] rounded-[4px] text-white">Learn more</button>
            </div>
          </div>

          {/* video */}
          <div className="relative mt-10 md:mt-0 md:ml-20">
            <img src="/images/video.png" alt="" className="w-full h-[300px] md:w-[480px] md:h-[578px] rounded-xl object-cover" />
            <i className="ri-play-circle-fill absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-5xl"></i>
          </div>
        </div>

        {/* our supporters */}
        <div className="mt-16 md:mt-20">
          <div className="flex justify-start items-center gap-0 w-full">
            <div>
              <p className="text-base font-semibold text-[#1D2130]">OUR SUPPORTERS</p>
            </div>
            <div className="bg-[#e5e5e5] h-0 flex-grow px-10">
              <hr className="bg-[#e5e5e5] h-0.5 w-full" />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-20 mt-10">
            <img src="/images/logos/Logo.png" alt="" />
            <img src="/images/logos/Logo-1.png" alt="" />
            <img src="/images/logos/Logo-2.png" alt="" />
            <img src="/images/logos/Logo-3.png" alt="" />
            <img src="/images/logos/Logo-4.png" alt="" />
            <img src="/images/logos/Logo-5.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
