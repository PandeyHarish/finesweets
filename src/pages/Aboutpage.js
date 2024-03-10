import React from "react";
import CTABanner from "../components/layouts/CTABanner";
import News from "../components/layouts/News";
import Events from "../components/layouts/Events";
import TeamsCard from "../components/layouts/teamcard/TeamsCard";

// dummy images import "temporary""
import team from "./images/Image.png";
import team1 from "./images/Image-1.png";
import team2 from "./images/Image-2.png";
import team3 from "./images/Image-3.png";
import team4 from "./images/Image-4.png";
import team5 from "./images/Image-5.png";
import team6 from "./images/Image-6.png";
import team7 from "./images/Image-7.png";

const parsedTeamData = {
  data: [
    {
      id: 1,
      imageUrl: team,
      name: "john doe",
      designation: "cofounder, ceo",
    },
    {
      id: 2,
      imageUrl: team1,
      name: "john doe",
      designation: "cofounder, ceo",
    },
    {
      id: 3,
      imageUrl: team2,
      name: "john doe",
      designation: "cofounder, ceo",
    },
    {
      id: 4,
      imageUrl: team3,
      name: "john doe",
      designation: "cofounder, ceo",
    },
    {
      id: 5,
      imageUrl: team4,
      name: "john doe",
      designation: "cofounder, ceo",
    },
    {
      id: 6,
      imageUrl: team5,
      name: "john doe",
      designation: "cofounder, ceo",
    },
    {
      id: 7,
      imageUrl: team6,
      name: "john doe",
      designation: "cofounder, ceo",
    },
    {
      id: 8,
      imageUrl: team7,
      name: "john doe",
      designation: "cofounder, ceo",
    },
  ],
};

const Aboutpage = () => {
  return (
    <>
      <div className="mx-4 md:mx-10 lg:mx-20">
        {/* section title */}
        <div className="flex justify-start gap-0 w-56 items-center ">
          <div className="bg-[#1d2130] h-0 flex-grow">
            <hr className="bg-[#1d2130] h-1 w-[64px]" />
          </div>
          <div>
            <p className="text-base font-semibold">Know More About Us</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 gap-3">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">We are a nonprofit team working worldwide</h1>
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </h3>
            <p className="text-base text-[#1D2130] mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eius eum autem, molestiae quae molestias praesentium in aut rerum
              omnis voluptate doloremque, iure fuga numquam. Quis eaque quam in rem.
            </p>
          </div>
        </div>
        {/* video */}
        <div className="my-10">
          <img src="/images/aboutbanner.png" className="h-[448px] w-full rounded-lg object-cover relative" alt="" />
          <div className="flex justify-center items-center">
            <img src="/images/Playicon.png" className="absolute bottom-52 md:bottom-10 " alt="" />
          </div>
        </div>
        {/* team  intro headline */}
        <div className="text-center">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">Meet Our Team</h2>
          <p className="text-[#525560]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>

        {/* team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {parsedTeamData?.data.map((data, index) => (
            <TeamsCard key={data.id} imageUrl={data.imageUrl} name={data.name} designation={data.designation} />
          ))}
        </div>
      </div>
      <div className="mx-4 md:mx-10">
        {/*  cta banner */}
        <CTABanner />
      </div>
      <div>
        {/* news cards */}
        <News />
      </div>
      <div>
        {/* events */}
        <Events />
      </div>
    </>
  );
};

export default Aboutpage;
