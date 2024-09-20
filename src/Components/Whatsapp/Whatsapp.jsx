import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className="fixed top-[33rem] left-4 z-50">
      <a href="https://wa.me/7985660474" target="_blank" rel="noreferrer">
        <FaWhatsapp
          color="white"
          size={35}
          className="cursor-pointer bg-green-800 rounded-lg"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
