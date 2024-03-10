import React from "react";
import ProjectCard from "./Projectcards/ProjectCard";

import cardbg from "./Projectcards/cardimages/cardbg.png";
import cardbg1 from "./Projectcards/cardimages/cardbg1.png";
import cardbg2 from "./Projectcards/cardimages/cardbg2.png";
const parsedData = {
  data: [
    {
      id: 1,
      title: "Mission 40K Tree Plantation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      imageUrl: cardbg,
    },
    {
      id: 2,
      title: "Weekly cleanliness program in city",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      imageUrl: cardbg1,
    },
    {
      id: 3,
      title: "Wildlife safety program 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      imageUrl: cardbg2,
    },
  ],
};

const Projectsdone = () => {
  return (
    <div className="p-5 w-full my-20">
      <div className="">
        {/* What we do section */}
        <div className="ml-4 md:ml-16 mt-8 md:mt-24">
          {/* Section title */}
          <div className="flex justify-start gap-0 w-full md:w-72 items-center">
            <div className="bg-[#1d2130] h-0 flex-grow">
              <hr className="bg-[#1d2130] h-1 w-[64px]" />
            </div>
            <div>
              <p className="text-base font-semibold">PROJECTS WE HAVE DONE</p>
            </div>
          </div>

          <div className="mt-8 ml-4 md:ml-16">
            <h3 className="text-xl md:text-3xl lg:text-5xl w-full md:w-[640px] text-[#1d2130] font-semibold">
              We are creating a sustainable society for everyone and forever.
            </h3>
          </div>
        </div>
        {/* Project row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 mx-2 lg:mx-5 ">
          {parsedData?.data.map((item, index) => (
            <ProjectCard key={item.id} image={item.imageUrl} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projectsdone;
