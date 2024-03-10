import React from "react";
import Newscard from "./newscards/Newscard";
import thumbnail from "./newscards/images/Thumbnail.png";
import thumbnail1 from "./newscards/images/Thumbnail-1.png";
import thumbnail2 from "./newscards/images/Thumbnail-2.png";
import thumbnail3 from "./newscards/images/Thumbnail-3.png";
const parsedNews = {
  data: [
    {
      id: 1,
      title: "Don’t destroy greenery and don’t spoil scenery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      imageUrl: thumbnail,
    },
    {
      id: 2,
      title: "Don’t destroy greenery and don’t spoil scenery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      imageUrl: thumbnail1,
    },
    {
      id: 3,
      title: "Don’t destroy greenery and don’t spoil scenery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      imageUrl: thumbnail2,
    },
    {
      id: 4,
      title: "Don’t destroy greenery and don’t spoil scenery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      imageUrl: thumbnail3,
    },
  ],
};
const News = () => {
  return (
    <>
      {/* News card section */}
      <div className="mx-4 md:mx-16 my-5">
        <div className="flex justify-start gap-0 w-full items-center">
          <div>
            <p className="text-base font-semibold text-[#1D2130]">Read Our News</p>
          </div>
          <div className="bg-[#e5e5e5] h-0 flex-grow px-2 md:px-10">
            <hr className="bg-[#e5e5e5] h-0.5 w-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
          {parsedNews?.data.map((data, index) => (
            <Newscard key={data.id} imageUrl={data.imageUrl} title={data.title} description={data.description} />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
