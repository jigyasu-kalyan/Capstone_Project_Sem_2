import React from 'react';

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-10 py-10 bg-gradient-to-br from-[#D9F0D9] to-white">
      <div className="flex flex-col space-y-4 max-w-xl mb-10 md:mb-0">
        <h1 className="text-4xl font-bold text-green-800">
          Your journey to peace starts here.
        </h1>
        <p className="text-lg text-gray-700">
          Meditation, therapy, wellness – all in one serene place.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Contact Us</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#D9F0D9] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[#D9F0D9] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="bg-[#D9F0D9] p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-300"
          ></textarea>
          <button
            type="submit"
            className="bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
