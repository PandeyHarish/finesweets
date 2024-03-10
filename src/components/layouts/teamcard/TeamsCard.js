import React from "react";

const TeamsCard = (props) => {
  const {name,designation,imageUrl} = props;
  return (
    <>
      <div className="w-[296px] mt-6 text-center">
        <img src={imageUrl} className="h-[320px]" alt="" />
        <p className="text-xl leading-8">{name}</p>
        <p className="text-xs leading-5 text-[#1D2130]">{designation}</p>
        <div className="">
          <ul className="list-none flex justify-center items-center gap-3">
            <li className="p-1 text-xl bg-slate-100 rounded-md">
              <i className="ri-facebook-line"></i>
            </li>
            <li className="p-1 text-xl bg-slate-100 rounded-md">
              <i className="ri-twitter-line"></i>
            </li>
            <li className="p-1 text-xl bg-slate-100 rounded-md">
              <i className="ri-linkedin-line"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TeamsCard;
