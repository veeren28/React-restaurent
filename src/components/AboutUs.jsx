import React from "react";
import chef from "/img/AboutUsChef.jpg";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-stone-900 to-stone-800 flex flex-col md:flex-row items-center justify-center px-4 py-10">
      {/* Image Section */}
      <div className="flex justify-center md:justify-center w-full md:w-1/2  mb-8 md:mb-0">
        <img
          src={chef}
          alt="Chef"
          className="w-auto max-h-[90vh] sm: md: lg: rounded-lg shadow-2xl border-4 border-amber-800 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left px-4 sm:px-6 md:px-10 space-y-6 md:justify-start">
        <div className="">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-800">
            About us
          </h1>
          <div className="h-2 w-16 bg-amber-800 rounded-lg mt-1" />
        </div>

        <p className="text-white text-sm sm:text-base leading-relaxed">
          Welcome to our culinary haven! We are passionate about crafting
          extraordinary dining experiences. Our team of dedicated chefs, led by
          a vision of culinary excellence, works tirelessly to bring you dishes
          that delight the senses and create lasting memories. We believe in the
          power of fresh, high-quality ingredients and innovative techniques to
          transform every meal into a celebration.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
