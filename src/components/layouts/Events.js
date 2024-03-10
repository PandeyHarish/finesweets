import React from "react";
import Eventscard from "./eventscard/Eventscard";
const parsedEvents = [
  {
    id: 1,
    header: "Say no to plastic usage and save the planet",
    date: "23",
    month: "sep",
  },
  {
    id: 2,
    header: "Weekly cleaning program",
    date: "25",
    month: "sep",
  },
];

const Events = () => {
  return (
    <>
      {/* Events card section */}
      <div class="mx-4 md:mx-8 lg:mx-16 my-5">
        <div class="flex justify-start items-center">
          <p class="text-base font-semibold text-[#1D2130]">Our Events</p>
          <div class="bg-[#e5e5e5] h-0 hidden md:flex md:ml-10"></div>
          <div class="hidden md:flex bg-[#e5e5e5] h-0.5 flex-grow ml-10"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 mt-10">
          {parsedEvents.map((data, index) => (
            <Eventscard key={data.id} header={data.header} date={data.date} month={data.month} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
