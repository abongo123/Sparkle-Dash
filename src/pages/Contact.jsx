import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        CONTACT US
      </h2>
      <form className="space-y-5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
            First Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 p-3 hover:bg-sky-200"
            required
          />
          </div>
          <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
            Last name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 p-3 hover:bg-sky-200"
            required
          />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 p-3 hover:bg-sky-200"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full border border-gray-300 p-3 hover:bg-sky-200"
            pattern="[0-9]{10}"
            required
          />
        </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
            Leave us a Message here
          </label>
          <textarea
            id="message"
            className="w-full border border-gray-300 p-3  h-32 resize-none hover:bg-sky-200"
            required
          ></textarea>
        </div>
        <div className="text-center">
        <button
          type="submit"
          className="bg-sky-500 text-white px-5 py-3 hover:bg-sky-300 transition"
        >
          Send Message
        </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
