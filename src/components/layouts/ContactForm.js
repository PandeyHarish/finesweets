import React from "react";

const ContactForm = () => {
  return (
    <div className=" p-6 rounded-lg mx-14 sm:mx-24 md:mx-32">
      <div className="grid grid-cols-2 gap-10">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-none shadow-sm"
            placeholder="John"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-none shadow-sm"
            placeholder="Doe"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Email ID
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-none shadow-sm"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-semibold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-none shadow-sm"
            placeholder="General Inquiry"
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
    </div>
  );
};

export default ContactForm;
