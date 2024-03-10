import React from "react";

const Newscard = (props) => {
  const { imageUrl, title, description } = props;
  return (
    <>
      <div className="w-[302px] h-[328px]">
        <img src={imageUrl} alt="" />

        <div>
          <h4 className="text-[#1C1D28] text-xl">{title}</h4>
          <p className="text-[#525560] text-base">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Newscard;
