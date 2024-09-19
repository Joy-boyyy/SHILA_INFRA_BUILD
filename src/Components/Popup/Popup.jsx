import React from "react";
import { RxCross2 } from "react-icons/rx";

const Popup = ({ urImg, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10 flex flex-col justify-center items-center">
      <div className="w-[50%] flex justify-end">
        <RxCross2 size={40} className="cursor-pointer" onClick={onClose} />
      </div>
      <img src={urImg} alt="selected Img" className="w-[50%] h-[50%]" />
    </div>
  );
};

export default Popup;
