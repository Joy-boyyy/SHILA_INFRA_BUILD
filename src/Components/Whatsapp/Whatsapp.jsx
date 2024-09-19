import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className="fixed top-[33rem] left-4 z-50">
      <FaWhatsapp
        color="white"
        size={35}
        className="cursor-pointer bg-green-800 rounded-lg"
      />
    </div>
  );
};

export default Whatsapp;
