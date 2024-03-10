import React from "react";

import icon from "./images/icons/Icon.png";
import icon1 from "./images/icons/Icon-1.png";
import icon2 from "./images/icons/Icon-2.png";
import icon3 from "./images/icons/Icon-3.png";
import icon4 from "./images/icons/Icon-4.png";
import icon5 from "./images/icons/Icon-5.png";

import cardbg from "../components/layouts/Projectcards/cardimages/cardbg.png";
import cardbg1 from "../components/layouts/Projectcards/cardimages/cardbg1.png";
import cardbg2 from "../components/layouts/Projectcards/cardimages/cardbg2.png";

import CTABanner from "../components/layouts/CTABanner";
import News from "../components/layouts/News";

import ProjectCard from "../components/layouts/Projectcards/ProjectCard";
import Events from "../components/layouts/Events";

const parsedIcon = {
  data: [
    {
      id: 1,
      title: "Build healthy cities",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      icon: icon,
    },
    {
      id: 2,
      title: "Protect land and water",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      icon: icon1,
    },
    {
      id: 3,
      title: "Tree plantation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      icon: icon2,
    },
    {
      id: 4,
      title: "Water sustainability",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      icon: icon3,
    },
    {
      id: 5,
      title: "Water sustainability",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      icon: icon4,
    },
    {
      id: 6,
      title: "Water sustainability",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      icon: icon5,
    },
  ],
};

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

const WhatWeDo = () => {
  return (
    <>
      <div className="my-20 mx-4 sm:mx-8 md:mx-16">
        <div className="flex flex-col sm:flex-row ">
          {/* about section */}
          <div className="w-full sm:w-[60%]">
            {/* section title */}
            <div className="flex justify-start gap-0 w-56 items-center ">
              <div className="bg-[#1d2130] h-0 flex-grow">
                <hr className="bg-[#1d2130] h-1 w-[64px]" />
              </div>
              <div>
                <p className="text-lg font-semibold">What We Do</p>
              </div>
            </div>

            <div className="mt-8 ml-4 sm:ml-16">
              <h3 className="text-4xl sm:text-5xl text-[#1d2130] font-semibold ">We help nature smile and survive everywhere</h3>
              <div className="text-[#525560] mt-8 text-base leading-6 text-justify ">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit earum dolore, eligendi facere temporibus!</p>
              </div>
            </div>
          </div>

          {/* video */}
          <div className="px-4 sm:px-0 mb-3 sm:w-[40%] sm:flex items-center justify-center">
            <img src="/images/WhatWeDo2.png" alt="" className="w-full h-auto rounded-xl object-fit" />
          </div>
        </div>
      </div>
      <section className="p-8 sm:p-16 mb-10 mt-8 sm:mt-48 bg-[#eff7f2]">
        <div className="">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2130]">What we do for the environment</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
          {parsedIcon?.data.map((data, index) => (
            <div className="flex" key={data.id}>
              <div>
                <img src={data.icon} alt="" className="size-14 " />
              </div>
              <div className="ml-5">
                <h2 className="text-lg sm:text-2xl font-bold text-[#1D2130]">{data.title}</h2>
                <p className="text-xs sm:text-sm text-[#525560] mt-2">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        {/* projects header */}
        <div className="mx-4 sm:mx-10 md:mx-20 text-center my-10 ">
          <h6 className="text-lg sm:text-xl text-[#1D2130]">Projects we have done</h6>
          <h2 className="text-3xl sm:text-5xl text-[#1D2130] font-bold">We are creating a sustainable society, for everyone.</h2>
        </div>
        {/* project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8 mx-4 sm:mx-10 md:mx-12">
          {parsedData?.data.map((data, index) => (
            <ProjectCard key={data.id} image={data.imageUrl} title={data.title} description={data.description} />
          ))}
        </div>

        {/* cta banner */}
        <CTABanner />

        {/* news */}
        <News />

        {/* events section */}
        <Events />
      </section>
    </>
  );
};

export default WhatWeDo;
