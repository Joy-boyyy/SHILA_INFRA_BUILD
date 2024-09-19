import React, { useState, Suspense, lazy } from "react";

import "./ProjectsComponent.css";

const Footer = lazy(() => import("../Footer/Footer"));

const ProjectLocation = lazy(() =>
  import("../ProjectLocationCom/ProjectLocation")
);

const ProjectComponent = () => {
  const imgGallery2 = [
    {
      imgPath: "/images/vaishomata.jpg",
      id: 1,
      details:
        "Area: 1000, width/length: 25*40, site: Amity Green, price/sq : 1700",
      location: "AMITY GREEN",
      price: "1700 sq",
      width: "25*40",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/Fm8ciVm8BuxPwiuf8",
      area: "1000",
    },

    {
      imgPath: "/images/img3.jpg",
      id: 3,
      details:
        "Area: 1250, width/length: 25*50, site: Laulai, price/sq : 2500rs",
      location: "LAULAI",
      price: "2500 sq",
      width: "25*50",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/Fm8ciVm8BuxPwiuf8",
      area: "1250",
    },

    {
      imgPath: "/images/img6.jpg",
      id: 6,
      details:
        "Area: 1250, width/length: 25*50, site: Madhav Green, price/sq : 3000rs",
      location: "MADHAV GREEN",
      price: "3000 sq",
      width: "25*50",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/oHnZjj9acPLwGMKk7",
      area: "1000",
    },

    {
      imgPath: "/images/img11.jpg",
      id: 11,
      details:
        "Area: 800, width/length: 20*40, site: Kishan Path, price/sq : 1499rs",
      location: "KISHAN PATH",
      price: "1499 sq",
      width: "20*40",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/SdwAFbiRHFJk25wEA",
      area: "800",
    },
  ];

  const [gotLocationData, setLocationData] = useState(imgGallery2[0]);
  const [gotSelectedLocation, setSelectedLocation] = useState("AMITY GREEN");

  const sentPath = (myData) => {
    const dataReceived = imgGallery2.filter(
      (filterProp) => myData === filterProp.location
    );
    setSelectedLocation(myData);
    setLocationData(dataReceived[0]);
  };

  return (
    <div className="w-[100%]">
      <div className="w-[100%] h-[100vh] bg-img-project flex justify-center items-center mb-5">
        <div className="text-[4rem] font-extrabold text-center">
          <h1 className="text-white">Our Projects</h1>
        </div>
      </div>
      {/* -----------Projects */}
      {/* some projects */}

      <div className="flex  gap-4 w-[100%] justify-center ">
        {imgGallery2.map((mapProp) => (
          <div key={mapProp.id}>
            <button
              type="button"
              className={`bg-[#BD283B] text-[white] p-2 rounded-md ${
                gotSelectedLocation === mapProp.location ? "bg-[#731c28]" : ""
              }`}
              onClick={() => {
                sentPath(mapProp.location);
              }}
            >
              {mapProp.location}
            </button>
          </div>
        ))}
      </div>

      {/* ------------------Location details */}

      <div className="flex flex-col lg:flex-row w-[100%] mt-4">
        <div className="basis-[50%]  flex justify-center">
          <img
            src={gotLocationData.imgPath}
            alt="myImg"
            className="w-100% h-[25rem]"
          />
        </div>
        <div className="basis-[50%] flex flex-col justify-center items-center">
          <h1 className="text-[2rem] font-bold">{gotLocationData.location}</h1>
          <p>
            <span className="text-[1.2rem] font-bold mr-2"> Details:</span>
            {gotLocationData.details}
          </p>
          <p>
            <span className="text-[1.2rem] font-bold mr-2"> Location:</span>{" "}
            {gotLocationData.mapLocation}{" "}
          </p>
          <p>
            <span className="text-[1.2rem] font-bold mr-2">Area:</span>{" "}
            {gotLocationData.area}
          </p>
          <p>
            <span className="text-[1.2rem] font-bold mr-2"> Price:</span>{" "}
            {gotLocationData.price}
          </p>
        </div>
      </div>

      {/* Project Location */}

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectLocation />
        </Suspense>
      </div>

      {/* -------------- Footer */}
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ProjectComponent;
