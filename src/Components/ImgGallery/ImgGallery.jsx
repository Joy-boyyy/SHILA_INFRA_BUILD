import { useState } from "react";

const ImgGallery = () => {
  const imgGallery = [
    {
      img: "/images/img1.jpg",
      id: 1,
      details:
        "Area: 1250, width/length: 25*50, site: Laulai, price/sq : 2500rs",
      location: "Laulai",
      price: "2500 sq",
      width: "25*50",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/Fm8ciVm8BuxPwiuf8",
      area: "1250",
    },
    {
      img: "/images/img2.jpg",
      id: 2,
      details:
        "Area: 1250, width/length: 25*50, site: Laulai, price/sq : 2500rs",
      location: "Laulai",
      price: "2500 sq",
      width: "25*50",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/Fm8ciVm8BuxPwiuf8",
      area: "1250",
    },
    {
      img: "/images/img3.jpg",
      id: 3,
      details:
        "Area: 1250, width/length: 25*50, site: Laulai, price/sq : 2500rs",
      location: "Laulai",
      price: "2500 sq",
      width: "25*50",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/Fm8ciVm8BuxPwiuf8",
      area: "1250",
    },
    {
      img: "/images/img4.jpg",
      id: 4,
      details:
        "Area: 1250, width/length: 25*50, site: Madhav Green, price/sq : 3000rs",
      location: "Madhav Green",
      price: "3000 sq",
      width: "25*50",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/oHnZjj9acPLwGMKk7",
      area: "1000",
    },
    {
      img: "/images/img5.jpg",
      id: 5,
      details:
        "Area: 1250, width/length: 25*50, site: Madhav Green, price/sq : 3000rs",
      location: "Madhav Green",
      price: "3000 sq",
      width: "25*50",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/oHnZjj9acPLwGMKk7",
      area: "1000",
    },
    {
      img: "/images/img6.jpg",
      id: 6,
      details:
        "Area: 1250, width/length: 25*50, site: Madhav Green, price/sq : 3000rs",
      location: "Madhav Green",
      price: "3000 sq",
      width: "25*50",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/oHnZjj9acPLwGMKk7",
      area: "1000",
    },
    {
      img: "/images/img7.jpg",
      id: 7,
      details:
        "Area: 800, width/length: 20*40, site: Kishan Path, price/sq : 1499rs",
      location: "Kishan Path",
      price: "1499 sq",
      width: "20*40",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/SdwAFbiRHFJk25wEA",
      area: "800",
    },
    {
      img: "/images/img8.jpg",
      id: 8,
      details:
        "Area: 800, width/length: 20*40, site: Kishan Path, price/sq : 1499rs",
      location: "Kishan Path",
      price: "1499 sq",
      width: "20*40",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/SdwAFbiRHFJk25wEA",
      area: "800",
    },
    {
      img: "/images/img9.jpg",
      id: 9,
      details:
        "Area: 800, width/length: 20*40, site: Kishan Path, price/sq : 1499rs",
      location: "Kishan Path",
      price: "1499 sq",
      width: "20*40",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/SdwAFbiRHFJk25wEA",
      area: "800",
    },
    {
      img: "/images/img10.jpg",
      id: 10,
      details:
        "Area: 800, width/length: 20*40, site: Kishan Path, price/sq : 1499rs",
      location: "Kishan Path",
      price: "1499 sq",
      width: "20*40",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/SdwAFbiRHFJk25wEA",
      area: "800",
    },
    {
      img: "/images/img11.jpg",
      id: 11,
      details:
        "Area: 800, width/length: 20*40, site: Kishan Path, price/sq : 1499rs",
      location: "Kishan Path",
      price: "1499 sq",
      width: "20*40",
      contactNo: "7985660474 (7310436822)",
      email: "me_mayakpandey@redifmail.com",
      mapLocation: "https://maps.app.goo.gl/SdwAFbiRHFJk25wEA",
      area: "800",
    },
  ];

  const [imgData, setImgData] = useState(imgGallery[0]);
  const [idSelection, setIdSelection] = useState(imgGallery[0].id);

  const selectedImg = (selectedImgData) => {
    setImgData(selectedImgData);
    setIdSelection(selectedImgData.id);
  };

  return (
    <div className="w-[100%]">
      <div className="w-[100%] flex justify-center">
        <img
          src={imgData.img}
          alt="buildingImg"
          className="w-[80%] h-[30rem] border-8 border-black"
        />
      </div>

      <div className="flex flex-row gap-2 justify-center mt-4 flex-wrap">
        {imgGallery.map((galleryProp) => (
          <div
            key={galleryProp.id}
            className={`cursor-pointer ${
              idSelection === galleryProp.id ? "border-4 border-black" : ""
            }`}
            onClick={() => {
              selectedImg(galleryProp);
            }}
          >
            <img
              src={galleryProp.img}
              alt={galleryProp.details}
              className="w-[50px] h-[50px]"
            />
          </div>
        ))}
      </div>

      <div className="w-[100%] mt-5">
        <div className="text-center text-[2rem] font-bold ">
          <h1>PROPERTY DETAILS</h1>
        </div>

        <div className="w-100% bg-[#BD283B] h-1 mb-4"></div>

        <div className="text-center text-[1rem] font-bold">
          <p>
            <span className="text-[1rem] font-bold">DETAILS:</span>
            {imgData.details}
          </p>
          <location>
            <span className="text-[1rem] font-bold">LOCATION:</span>
            {imgData.location}
          </location>
          <p>
            <span className="text-[1rem] font-bold">WIDTH:</span>
            {imgData.width}
          </p>
          <p>
            <span className="text-[1rem] font-bold">AREA:</span>
            {imgData.area}
          </p>
          <p>
            <span className="text-[1rem] font-bold">CONTACT NUMBER:</span>
            {imgData.contactNo}
          </p>
          <p>
            <a href={`mailto:${imgData.email}`}>{imgData.email}</a>
          </p>
          <p>
            <a href={`${imgData.mapLocation}`} target="_blank" rel="noreferrer">
              GOOGLE MAP LOCATION : {imgData.mapLocation}
            </a>
          </p>
          <p>
            <span className="text-[1rem] font-bold">PRICE:</span>{" "}
            {imgData.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImgGallery;
