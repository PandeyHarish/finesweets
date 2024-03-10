import React from "react";

const Eventscard = (props) => {
  const { header, date, month } = props;
  return (
    <>
      <div class="bg-[#BEF3C0] rounded-lg p-6 flex flex-col md:flex-row ">
        <div class="flex-shrink-0">
          <p class="font-bold text-4xl md:text-5xl">{date}</p>
          <p class="text-base">{month}</p>
        </div>
        <div class="lg:pl-4 mt-4 md:mt-0 lg:ml-4">
          {/* Section title  */}
          <div class="flex justify-start items-center mb-4 ">
            <div>
              <p class="text-base mr-3">Next Events</p>
            </div>
            <div class="bg-[#1d2130] h-0.5 w-10 hidden md:block"></div>
          </div>
          <div class="flex items-center">
            <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold w-full ">{header}</p>
            <img src="/images/Arrowbutton.png" alt="" class="lg:ml-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventscard;
