import { useState } from "react";
import Popup from "../Popup/Popup";

const GalleryByLocation = () => {
  const imgByLocation = [
    {
      img: "/images/img1.jpg",
      id: 1,
      location: "Laulai",
      selected: "all",
    },
    {
      img: "/images/img2.jpg",
      id: 2,
      location: "Laulai",
      selected: "all",
    },
    {
      img: "/images/img3.jpg",
      id: 3,
      location: "Laulai",
      selected: "all",
    },
    {
      img: "/images/img4.jpg",
      id: 4,
      location: "Madhav Green",
      selected: "all",
    },
    {
      img: "/images/img5.jpg",
      id: 5,
      location: "Madhav Green",
      selected: "all",
    },

    {
      img: "/images/img7.jpg",
      id: 7,
      location: "Kishan Path",
      selected: "all",
    },

    {
      img: "/images/img10.jpg",
      id: 10,
      location: "Kishan Path",
      selected: "all",
    },
    {
      img: "/images/img11.jpg",
      id: 11,
      location: "Kishan Path",
      selected: "all",
    },
    {
      img: "/images/img12.jpg",
      id: 12,
      location: "Amity Green",
      selected: "all",
    },
    {
      img: "/images/img13.jpg",
      id: 13,
      location: "Amity Green",
      selected: "all",
    },
    {
      img: "/images/img14.jpg",
      id: 14,
      location: "Amity Green",
      selected: "all",
    },
    {
      img: "/images/img15.jpg",
      id: 15,
      location: "Amity Green",
      selected: "all",
    },
  ];

  const [gotLocationImg, setLocationImg] = useState(imgByLocation);
  const [selectedBtn, setSelectedBtn] = useState("all");
  const [chosenImg, setChosenImg] = useState(imgByLocation[0].img);
  const [isTrue, setIsTrue] = useState(false);

  const setLocation = (receivedLocation) => {
    const selectedLocationImg = imgByLocation.filter(
      (filterProp) =>
        filterProp.location === receivedLocation ||
        filterProp.selected === receivedLocation
    );

    setLocationImg(selectedLocationImg);
    setSelectedBtn(receivedLocation);
  };

  const sendImgToComp = (gotImg) => {
    setChosenImg(gotImg);
    setIsTrue(true);
  };

  return (
    <div className="w-[100%]">
      {/* ---------- All Buttons  */}
      <div className="w-[100%] flex flex-row gap-3 justify-center">
        <button
          type="button"
          onClick={() => {
            setLocation("all");
          }}
          className={`bg-[#BD283B] p-2 rounded-md text-white hover:bg-[#911d2c] ${
            selectedBtn === "all" ? "bg-[#742832]" : "bg-[#BD283B]"
          }`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => {
            setLocation("Amity Green");
          }}
          className={`bg-[#BD283B] p-2 rounded-md text-white hover:bg-[#911d2c] ${
            selectedBtn === "Amity Green" ? "bg-[#742832]" : "bg-[#BD283B]"
          }`}
        >
          Amity Green
        </button>
        <button
          type="button"
          onClick={() => {
            setLocation("Laulai");
          }}
          className={`bg-[#BD283B] p-2 rounded-md text-white hover:bg-[#911d2c] ${
            selectedBtn === "Laulai" ? "bg-[#742832]" : "bg-[#BD283B]"
          }`}
        >
          Laulai
        </button>
        <button
          type="button"
          onClick={() => {
            setLocation("Kishan Path");
          }}
          className={`bg-[#BD283B] p-2 rounded-md text-white hover:bg-[#911d2c] ${
            selectedBtn === "Kishan Path" ? "bg-[#742832]" : "bg-[#BD283B]"
          }`}
        >
          Kishan Path
        </button>

        <button
          type="button"
          onClick={() => {
            setLocation("Madhav Green");
          }}
          className={`bg-[#BD283B] p-2 rounded-md text-white hover:bg-[#911d2c] ${
            selectedBtn === "Madhav Green" ? "bg-[#742832]" : "bg-[#BD283B]"
          }`}
        >
          Madhav Green
        </button>
      </div>
      {/* ---------------img gallery */}
      <div className="w-100% flex flex-wrap gap-4 justify-center mt-4">
        {gotLocationImg.map((mapProp) => (
          <div
            key={mapProp.id}
            className="w-[25rem] h-[25rem] border-2 border-black cursor-pointer"
            onClick={() => {
              sendImgToComp(mapProp.img);
            }}
          >
            <img src={mapProp.img} alt="Land" className="w-[100%] h-[100%]" />
          </div>
        ))}
      </div>
      {/* ------------Popup section */}
      {isTrue && (
        <Popup
          urImg={chosenImg}
          onClose={() => {
            setIsTrue(false);
          }}
        />
      )}
    </div>
  );
};

export default GalleryByLocation;
