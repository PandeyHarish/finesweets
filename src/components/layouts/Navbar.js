import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [display, setDisplay] = useState("hidden");
  const mobNav = () => {
    setDisplay((prevState) => (prevState === "hidden" ? "block" : "hidden"));
  };

  return (
    <>
      {/* desktop nav */}
      <nav className="hidden md:block">
        <div className="flex justify-between px-10 py-3 ">
          <div>
            <p className="text-[20px]">
              <span className="font-extrabold">&#123;</span>Finesweet
            </p>
          </div>
          <div className="flex text-lg">
            <ul className="list-none flex gap-8">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/whatwedo">What we do</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
              <button className=" px-4 py-2 rounded-md bg-[#1d2130] text-white border-none text-base">Donate</button>
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className="sticky z-20 w-full px-4 mt-2 bg-transparent sm:hidden border-b shadow-sm py-1.5" id="mobinav">
        <div className="px-4 ">
          <div className="flex justify-between">
            <h1 className="  text-base sm:text-xl  ">
              <Link to={"/"}>
                <span className="font-extrabold">&#123;</span>Finesweet
              </Link>
            </h1>
            <div className="flex gap-4">
              <p className="text-2xl " onClick={mobNav}>
                <i className={`cursor-pointer ri-${display === "hidden" ? "menu" : "close"}-line inline-block align-bottom `}></i>
              </p>
            </div>
          </div>
          <div
            id="mobnav"
            className={`text-base p-4 fixed border ml-2 shadow-sm top-14  left-0 pt-1 w-[50%] rounded-lg ${display} animate__animated animate__backInLeft bg-white text-[]`}
          >
            <ul>
              <li className="p-2">
                <Link to="/" className="text-xl ">
                  Home
                </Link>
              </li>
              <li className="p-2 text-xl">
                <Link to="/about">About Us</Link>
              </li>

              <li className="p-2 text-xl">
                <Link to="/whatwedo">What we do</Link>
              </li>
              <li className="p-2 text-xl">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="p-2 text-xl">
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
