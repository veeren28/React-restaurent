import React from "react";
import chef from "/img/AboutUsChef.jpg";
const AboutUs = () => {
  return (
    <div
      className="w-screen h-screen grid grid-cols-2
  "
    >
      <div className="flex flex-1  bg-stone-800 justify-center items-center ">
        <img src={chef} alt="" className="h-120 rounded-md" />
      </div>
      <div className="flex flex-1 flex-col  bg-stone-800 items-center justify-center">
        <div className="flex flex-col">
          <h1 className="text-6xl text-amber-700 ">
            <span className="inline-block relative ">
              About us
              <span className=" block mt-1 h-2 bg-amber-800 rounded-md scale-x-110"></span>
            </span>
          </h1>

          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nisi,
            exercitationem repellat labore sequi quibusdam aliquam assumenda
            expedita quia qui ducimus, aut asperiores accusamus suscipit. Beatae
            ad nemo quaerat quos?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
