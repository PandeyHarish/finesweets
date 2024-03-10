import React from "react";

const VolunteerModal = (props) => {
  const { display, func } = props;

  if (!display) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto animate__animated animate__zoomIn">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <button onClick={func} className="float-right p-2 m-2 text-gray-700 hover:text-black focus:outline-none">
            <i className="ri-close-line text-xl rounded-sm p-2 bg-gray-400"></i>
          </button>

          <div className="p-6">
            <h2 className="text-4xl font-bold text-[#1D2130]">Join as a volunteer</h2>
            <p className="text-sm text-[#525560]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen varius enim in eros elementum tristique.{" "}
            </p>

            <form action="">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-none shadow-sm"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-none shadow-sm"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold">
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-none shadow-sm"
                    placeholder="Email ID"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Type your message"
                ></textarea>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-[#70c174] text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 ">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerModal;
