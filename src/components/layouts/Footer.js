import React from "react";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-[#0b0706] text-white px-4 md:px-28 py-12 md:py-24">
        <div>
          <p className="text-2xl font-extrabold">
            <span className="font-extrabold">&#123;</span>Finesweet
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          <div>
            <h4 className="text-base font-bold">Our Team</h4>
            <ul className="text-sm font-extralight leading-6">
              <li>About us</li>
              <li>Team</li>
              <li>What we do</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold">More</h4>
            <ul className="text-sm font-extralight leading-6">
              <li>Projects</li>
              <li>Events</li>
              <li>Donate</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold">Connect</h4>
            <ul className="text-sm font-extralight leading-6">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl md:text-5xl">Subscribe to get the latest updates</h2>
          <input
            type="text"
            name="Newsletter"
            className="bg-transparent px-2 py-2 h-12 w-full md:w-[60%] mt-4 border rounded-md"
            placeholder="Your Email"
          />
          <button className="bg-white text-black px-8 py-4 mt-4 md:mt-0">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
