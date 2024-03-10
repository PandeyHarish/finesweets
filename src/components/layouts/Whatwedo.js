import React from "react";

const Whatwedo = () => {
  return (
    <>
      <div className="p-5 w-full my-20 bg-[#eff7f2]">
        <div className="flex flex-col lg:flex-row">
          {/* what we do section */}
          <div className="md:w-[50%] ml-0 md:ml-16 mt-0 md:mt-24">
            {/* section title */}
            <div className="flex justify-start gap-0 w-44 items-center ">
              <div className="bg-[#1d2130] h-0 flex-grow">
                <hr className="bg-[#1d2130] h-1 w-[64px]" />
              </div>
              <div>
                <p className="text-sm lg:text-base font-semibold">WHAT WE DO</p>
              </div>
            </div>

            <div className="mt-8 ml-0 md:ml-16">
              <h3 className="text-lg sm:text-xl md:text-3xl  lg:text-5xl text-[#1d2130] font-semibold ">
                We care for earth, care for the coming birth
              </h3>
              <div className="text-[#525560] mt-8 text-base leading-6 text-justify">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit earum dolore, eligendi facere temporibus!</p>
              </div>

              {/* functions  */}
              <div class="mt-10 leading-4">
                <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <li class="flex flex-col">
                    <img src="/images/icons/Icon-3.png" alt="" class="size-11" />
                    <div class="mt-3">
                      <h4 class="text-base md:text-lg lg:text-2xl text-[#1d2130] font-semibold">Build Healthy Cities</h4>
                      <div class="text-[#525560] mt-2 text-xs lg:text-sm leading-6 text-justify">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit earum dolore, eligendi facere temporibus!</p>
                      </div>
                    </div>
                  </li>

                  <li class="flex flex-col mt-3">
                    <img src="/images/icons/Icon-2.png" alt="" class="size-11" />
                    <div class="mt-3">
                      <h4 class="text-base md:text-lg lg:text-2xl text-[#1d2130] font-semibold">Tree Plantation</h4>
                      <div class="text-[#525560] mt-2 text-xs lg:text-sm leading-6 text-justify">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit earum dolore, eligendi facere temporibus!</p>
                      </div>
                    </div>
                  </li>

                  <li class="flex flex-col mt-3">
                    <img src="/images/icons/Icon-1.png" alt="" class="size-11" />
                    <div class="mt-3">
                      <h4 class="text-base md:text-lg lg:text-2xl text-[#1d2130] font-semibold">Protect Land and Water</h4>
                      <div class="text-[#525560] mt-2 text-xs lg:text-sm leading-6 text-justify">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit earum dolore, eligendi facere temporibus!</p>
                      </div>
                    </div>
                  </li>

                  <li class="flex flex-col mt-3">
                    <img src="/images/icons/Icon.png" alt="" class="size-11" />
                    <div class="mt-3">
                      <h4 class="text-base md:text-lg lg:text-2xl text-[#1d2130] font-semibold">Animal Safety</h4>
                      <div class="text-[#525560] mt-2 text-xs lg:text-sm leading-6 text-justify">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit earum dolore, eligendi facere temporibus!</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="lg:px-5 md:px-20 mb-3">
            <img src="/images/whatwedo.png" alt="" className="w-full md:w-[480px] h-[578px] rounded-xl object-cover mt-10 md:mt-28" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatwedo;
