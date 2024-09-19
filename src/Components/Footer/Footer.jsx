// import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#0E2E50] mt-5 p-7 font-bold text-[#6F96A7]">
      <div className="lg:flex-row lg:items-center flex flex-col justify-around items-center text-[1.5rem]">
        <div>
          <h1 className="text-white">Get In Touch</h1>
          <div className="flex gap-2 mt-2">
            <FaLocationDot color="#6F96A7" />

            <div>
              <h2 className="text-[1rem]">
                B-4/133, 2<sup>nd</sup> Floor, Vijayant Khand, Gomti Nagar,
              </h2>

              <h2 className="text-[1rem]">Lucknow - 226010</h2>
            </div>
          </div>

          <div className="flex text-[1rem] gap-4 mt-4">
            <FaPhoneAlt size={20} />{" "}
            <span>+91 9455746616 || +91 7985660474</span>
          </div>

          {/* ---email */}

          <div className="flex text-[1rem] gap-4 mt-4">
            <MdEmail size={20} />
            <a href="mailto:me_mayakpandey@redifmail.com">
              me_mayakpandey@redifmail.com
            </a>
          </div>
        </div>

        <div>
          <div className="text-center text-white">
            <h1>Follow Us</h1>
          </div>
          <div className="flex gap-4 mt-2">
            {/* <span className="cursor-pointer border border-white p-2 rounded-[100%] hover:bg-white">
              <FaFacebookF />
            </span> */}
            <span className="cursor-pointer border border-white p-2 rounded-[100%] hover:bg-white">
              <a
                href="https://www.instagram.com/shailinfrabuild/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </span>

            <span className="cursor-pointer border border-white p-2 rounded-[100%] hover:bg-white">
              <a
                href="https://x.com/Shailinfrabuild"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </span>

            <span className="cursor-pointer border border-white p-2 rounded-[100%] hover:bg-white">
              <a
                href="https://www.linkedin.com/in/mahendra-kumar-pandey-8986a9328/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>

        {/* --------------------- Quick Link */}
        <div>
          <div>
            <h1 className="text-white mb-3">Quick Link</h1>
          </div>
          <Link to="/project" className="flex gap-3 items-center text-[1rem]">
            <IoIosArrowForward /> <span>PROJECTS</span>
          </Link>
          <Link to="/gallery" className="flex gap-3 items-center text-[1rem]">
            <IoIosArrowForward /> <span>GALLERY</span>
          </Link>
          <Link to="/about" className="flex gap-3 items-center text-[1rem]">
            <IoIosArrowForward /> <span>ABOUT US</span>
          </Link>
          <Link to="/contact" className="flex gap-3 items-center text-[1rem]">
            <IoIosArrowForward /> <span>CONTACT US</span>
          </Link>
          <Link to="/project" className="flex gap-3 items-center text-[1rem]">
            <IoIosArrowForward /> <span>PROJECTS</span>
          </Link>
        </div>
      </div>
      <div className="text-center mt-5">
        <h2>
          © 2024{" "}
          <span className="text-[#F58634]"> Shail Infra Build Pvt. Ltd.</span>,
          All rights reserved. | Powered by
          <span className="text-[#F58634]"> Shail Infra Build Pvt. Ltd. </span>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
