import React, { useEffect, useState } from "react";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen bg-[url('/img/LandingPageBg.jpg')] bg-cover bg-center m-0 p-0 flex flex-col">
      {/* NavBar */}
      <div className="w-screen h-auto p-2 flex justify-center pt-10">
        <ul className="flex flex-row space-x-2 text-white text-xl">
          {/* nav items */}
          {["Home", "About", "Menu", "Contact us"].map((item, i) => (
            <li
              key={i}
              className="cursor-pointer font-exo2 flex flex-col items-center group px-4 py-2 rounded-md transition-all duration-300 hover:bg-black/20"
            >
              <span className="transition-colors duration-300 group-hover:text-orange-700">
                {item}
              </span>
              <span className="mt-1 h-1 w-full bg-orange-500 rounded transition-all duration-300 group-hover:bg-orange-700 group-hover:scale-x-110"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Body */}
      <div className="flex flex-1 items-center px-20  -mt-40  ">
        <div>
          <h2 className="text-white text-6xl">
            Just Order Us and <br />
            <span className="typing"> Start the Day in the Best Way </span>
          </h2>
          <button className="block p-2 bg-amber-600 rounded-lg w-30 cursor-pointer hover:bg-amber-700 hover:transition-all hover:scale-110 duration-500">
            {" "}
            Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
