import React, { useState } from "react";
import MainCourse from "./MainCourse";
import Starters from "./Starters";
import Desserts from "./Desserts";
import Beverages from "./Beverages";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Starters");

  const renderCategory = () => {
    switch (selectedCategory) {
      case "Starters":
        return <Starters />;
      case "Main Course":
        return <MainCourse />;
      case "Desserts":
        return <Desserts />;
      case "Beverages":
        return <Beverages />;
      default:
        return <MainCourse />;
        g;
    }
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-bl from-black via-stone-900 to-stone-800 text-white">
      {/* Search Bar */}
      <div className="mt-[10vh]">
        <input
          type="text"
          className="md:w-[60vh] h-8 px-2 sm:min-w-[40vh] bg-white text-black rounded-md border-none"
          placeholder="Search Food Item"
        />
      </div>

      {/* Navigation */}
      <ul className="flex flex-wrap justify-center gap-4 mt-6 text-lg sm:text-xl">
        {["Starters", "Main Course", "Desserts", "Beverages"].map((item, i) => (
          <li
            key={i}
            className={`cursor-pointer flex flex-col items-center group px-3 py-2 rounded-md transition-all duration-300 ${
              selectedCategory === item ? "bg-black/20" : ""
            }`}
            onClick={() => setSelectedCategory(item)}
          >
            <span className="group-hover:text-orange-600 transition-colors duration-300">
              {item}
            </span>
            <span className="mt-1 h-1 w-full bg-orange-500 rounded transition-all duration-300 group-hover:bg-orange-600 group-hover:scale-x-110"></span>
          </li>
        ))}
      </ul>

      {/* Food Cards */}
      <div className="w-screen mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-10">
        {renderCategory()}
      </div>
    </div>
  );
};

export default Menu;
