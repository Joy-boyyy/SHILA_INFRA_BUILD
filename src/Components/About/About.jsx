import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-bg-img w-[100%] min-h-[700px] flex items-center">
      <div className="flex flex-col lg:flex-row w-[100%] items-center pl-5 pr-5">
        <div className="basis-[50%]">
          <img
            src="/images/vaishomata.jpg"
            alt="Know_us"
            className="h-[600px] w-[450px] z-[1]"
          />
        </div>
        <div className="basis-[50%]">
          <div className="text-center font-bold">
            <h1 className="text-[45px]">
              <span className="text-black">ABOUT</span>
              <span> </span>
              <span className="text-orange-500">US</span>
            </h1>
          </div>
          <div>
            <div className="text-center">
              <p className="font-bold text-[1.5rem]">
                Building Dreams, Creating Futures.
              </p>
            </div>
            <p>
              With over{" "}
              <span className="text-orange-500 font-bold">
                {" "}
                15 years of experience, Shail Infra Build Pvt.
              </span>
              Ltd. is a leader in delivering premium real estate and
              construction solutions in{" "}
              <span className="text-orange-500 font-bold">
                Lucknow, Uttar Pradesh.
              </span>{" "}
              Our expertise spans across offering prime plots, modern
              properties, row houses and tailored construction services. We are
              dedicated to turning your vision into reality by combining quality
              craftsmanship, innovative designs, and customer-focused service.
            </p>
            <br />
            <p>
              Backed by a team of experienced professionals, we ensure that
              every project meets the highest standards of safety, aesthetics
              and durability. Whether you're planning to build your dream home
              or make a smart investment, we are here to provide you with
              reliable and effective solutions.
            </p>
            <br />
            <p>
              With a solid track record built over 15 years,{" "}
              <span className="text-orange-500 font-bold">
                {" "}
                Shail Infra Build
              </span>
              is committed to shaping the future of real estate and construction
              in Lucknow, one project at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
