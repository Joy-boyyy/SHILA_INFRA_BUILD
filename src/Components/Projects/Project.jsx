import React from "react";
import GalleryByLocation from "../GalleryByLocation/GalleryByLocation";

const Project = () => {
  return (
    <div className="w-[100%] mt-5 ">
      {/* -----------Heading Div Seaction */}
      <div className="text-center ">
        <h1 className="text-[40px] font-bold mb-9">
          <span className="text-[#0097DB]">Our </span>
          <span className="ml-1"></span>
          <span className="text-[#F58634]">Projects</span>
        </h1>
      </div>
      {/* ---------------- all Projects */}

      <GalleryByLocation />
    </div>
  );
};

export default Project;
