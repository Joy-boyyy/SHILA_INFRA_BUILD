import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Menu = () => {
  return (
    <>
      <header className="w-[100%] pl-9 pr-9 pt-1 pb-1 ">
        <nav className="lg:flex-row flex flex-col justify-between items-center">
          {/* main logo section */}
          <div className="flex flex-row items-center">
            {/* Web logo section */}
            <div>
              <img
                src="/images/companyLogo.jpeg"
                alt="Company_Logo"
                className="w-[4rem] h-[4rem]"
              />
            </div>
            {/* Company name */}
            <div className="flex flex-col">
              <div>
                <h1>
                  <span className="text-[#4BABD1] text-[2rem] font-bold">
                    SHILA INFRA
                  </span>
                  <span> </span>
                  <span className="text-[#BD283B] text-[2rem] font-bold">
                    BUILD
                  </span>
                </h1>
              </div>
              <div className="ml-3">
                <h2 className="text-[20px] font-bold">Private limited</h2>
              </div>
            </div>
          </div>

          {/*------------All  Address Section */}
          <div className="flex flex-col gap-4 sm:flex-row">
            {/*---------- personal address */}
            <div className="flex felx-row gap-4">
              <div>
                <MdLocationPin size={40} color="#BD283B" />
              </div>
              <div>
                <div>
                  <span className="text-[#BD283B] font-bold text-[20px]">
                    {" "}
                    Address:
                  </span>
                </div>
                <div>
                  <span className="font-bold">
                    B-4/133, 2<sup>nd</sup> Floor, Vijayant Khand, Gomti Nagar,
                    Lucknow - 226010
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------Call AnyTime */}
            <div className="flex felx-row gap-4">
              <div>
                <BsFillTelephoneFill size={40} color="#BD283B" />
              </div>
              <div>
                <div>
                  <span className="text-[#BD283B] font-bold text-[20px]">
                    Call Anytime:
                  </span>
                </div>
                <div>
                  <span className="font-bold">+91 9455746616</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Menu;
