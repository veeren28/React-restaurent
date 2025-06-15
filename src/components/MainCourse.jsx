import React from "react";

// Dynamically import all images in MainCourse folder
const images = import.meta.glob("/src/assets/MainCourse/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

// Convert image entries into an array of { name, img }
const Main = Object.entries(images).map(([path, img]) => {
  const fileName = path.split("/").pop().split(".")[0];
  const name = fileName
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  return { name, img };
});

const MainCourse = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {Main.map((item, index) => (
        <div
          key={index}
          className="w-full h-72 bg-black/30 backdrop-blur-md rounded-2xl text-neutral-200 p-3 flex flex-col justify-between hover:bg-black/40 hover:shadow-lg hover:shadow-orange-400 hover:scale-105 transition-all"
        >
          <div
            className="w-full h-36 bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
          <div>
            <p className="font-bold text-md mt-2">{item.name}</p>
          </div>
          <button className="bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-lg mt-2 hover:bg-orange-500 transition-colors">
            See more
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainCourse;
