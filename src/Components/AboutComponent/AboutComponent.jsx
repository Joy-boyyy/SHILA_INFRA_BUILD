import { lazy, Suspense } from "react";
import "./AboutComponent.css";
import { FaEye, FaBullseye } from "react-icons/fa";

const About = lazy(() => import("../About/About"));

const Footer = lazy(() => import("../Footer/Footer"));

const AboutComponent = () => {
  return (
    <div className="w-[100%]">
      <div className="w-[100%] h-[100vh] bg-img-About flex justify-center items-center">
        <div className="text-[4rem] font-extrabold text-center">
          <h1 className="text-white">ABOUT US</h1>
        </div>
      </div>

      {/* ------------------About */}

      <Suspense fallback={<div className="text-[2rem]">Loading...</div>}>
        <About />
      </Suspense>

      {/* ------------Our Vision */}
      <div className="our-mission-css min-h-[100vh] w-[100%] lg:flex-row flex flex-col gap-5 items-center ">
        <div className="basis-[50%] text-[#BD283B] font-bold">
          <div className="flex justify-center">
            <h1 className="flex items-center gap-3 text-[3rem]  ">
              <FaEye size={50} /> <span> Our Vision </span>
            </h1>
          </div>
          <p className="text-[1.2rem] text-black">
            Our vision is to be a leader in real estate development and
            construction, setting new benchmarks for quality, design, and
            customer satisfaction. We aspire to create world-class
            infrastructures that define the future of living and investment
            opportunities. By continuously innovating and embracing cutting-edge
            technology, we aim to expand our footprint while maintaining our
            commitment to building dreams and creating lasting value for our
            customers.
          </p>
        </div>

        <div className="basis-[50%] text-[#BD283B] font-bold">
          <div className="flex justify-center">
            <h1 className="flex items-center gap-3 text-[3rem]  ">
              <FaBullseye size={50} /> <span> Our Mission </span>
            </h1>
          </div>

          <p className="text-[1.2rem] text-black">
            At Shail Infra Build Pvt. Ltd., our mission is to deliver
            high-quality real estate and construction solutions that exceed
            customer expectations. We strive to create spaces that reflect
            innovation, trust, and sustainability, ensuring that every project
            enhances the lives of our clients and contributes to the growth of
            the communities we serve. Through integrity, professionalism, and
            excellence, we aim to become the most reliable name in the real
            estate industry in Lucknow, Uttar Pradesh.
          </p>
        </div>
      </div>

      {/* ---------------- Footer  */}
      <Suspense fallback={<div className="text-[2rem]">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default AboutComponent;
