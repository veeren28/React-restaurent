import React from "react";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen bg-[url('/img/LandingPageBg.jpg')] bg-cover bg-center flex flex-col">
      {/* NavBar */}
      <nav className="w-full p-4 flex justify-center">
        <ul className="flex flex-wrap justify-center gap-4 text-white text-lg sm:text-xl">
          {["Home", "About", "Menu", "Contact us"].map((item, i) => (
            <li
              key={i}
              className="cursor-pointer flex flex-col items-center group px-3 py-2 rounded-md transition-all duration-300 hover:bg-black/20"
            >
              <span className="group-hover:text-orange-600 transition-colors duration-300">
                {item}
              </span>
              <span className="mt-1 h-1 w-full bg-orange-500 rounded transition-all duration-300 group-hover:bg-orange-600 group-hover:scale-x-110"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Body */}
      <main className="flex flex-1 items-center justify-center px-6 sm:px-12 md:px-24 text-center">
        <div>
          <h2 className="text-white text-3xl sm:text-5xl md:text-6xl leading-snug font-semibold">
            Just Order Us and <br />
            <span className="typing">Start the Day in the Best Way</span>
          </h2>

          <button className="mt-6 px-6 py-2 bg-amber-600 text-white rounded-lg text-lg hover:bg-amber-700 transform transition-transform hover:scale-110 duration-500">
            Menu
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
