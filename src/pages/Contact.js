import React from "react";
import ContactForm from "../components/layouts/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="p-5 w-full mb-20 bg-[#eff7f2]">
        <div className="flex flex-col md:flex-row">
          {/* what we do section */}
          <div className="w-full md:w-[608px] mx-auto md:ml-16 mt-8 md:mt-24">
            {/* section title */}
            <div className="flex w-40 items-center mb-8">
              <div className="bg-[#1d2130] h-0 flex-grow">
                <hr className="bg-[#1d2130] h-1 w-[64px]" />
              </div>
              <div>
                <p className="text-base font-semibold">Contact Us</p>
              </div>
            </div>

            <div className="ml-0 md:ml-16">
              <h3 className="text-4xl md:text-5xl text-[#1d2130] font-semibold">We'd love to hear from you</h3>
              <div className="text-[#525560] mt-4 md:mt-8 text-base leading-6 text-justify">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit earum dolore, eligendi facere temporibus!</p>
              </div>
            </div>
          </div>

          {/* contact section */}
          <div className="px-0 md:px-20 mb-3 mt-8 md:mt-0">
            <ul>
              <li className="mb-8 md:mb-10">
                <h4 className="text-lg md:text-xl font-bold">Let's talk</h4>
                <div className="flex flex-col md:flex-row gap-5">
                  <p className="text-base md:text-xl">+1 23 456 789</p>
                  <p className="text-base md:text-xl">hello@finsweet.com</p>
                </div>
              </li>
              <li className="mb-8 md:mb-10">
                <h4 className="text-lg md:text-xl font-bold">Head Office</h4>
                <p className="text-base md:text-xl">8 Brewery Drive,Hudson NH 035051 USA</p>
              </li>
              <li className="mb-8 md:mb-10">
                <h4 className="text-lg md:text-xl font-bold">Branch Office</h4>
                <p className="text-base md:text-xl">178 Marconi St.,Venice 035051 USA</p>
              </li>
              <li>
                <h4 className="text-lg md:text-xl font-bold">Follow us</h4>
                <div className="flex gap-5 mt-2 md:mt-0">
                  <i className="ri-facebook-circle-fill text-2xl"></i>
                  <i className="ri-twitter-line text-2xl"></i>
                  <i className="ri-linkedin-box-fill text-2xl"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* contact form */}
      <section>
        <ContactForm />
      </section>

      {/* footer */}
    </>
  );
};

export default Contact;
