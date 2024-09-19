import { Suspense, lazy } from "react";
import { IoIosPin } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useState } from "react";
import "./Contact.css";

const Footer = lazy(() => import("../Footer/Footer"));

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userMail, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  return (
    <div className="w-[98.7vw] min-h-[100vh]">
      <div className="w-[100%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.151859078966!2d81.01887707685947!3d26.866915916531156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be28cf752aaeb%3A0xfec660f0e596e2d3!2sB-4%2F133%2C%20Vijayant%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1726663262011!5m2!1sen!2sin"
          title="location"
          className="border border-black w-[100%] h-[400px]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* locations section */}
      <div className="lg:flex-row flex flex-col gap-5 p-4">
        <div className="flex flex-col items-center basis-[50%] border border-black rounded-t-3xl p-2">
          <IoIosPin size={40} color="#BD283B" />
          <address className="mt-3">
            B-4/133 ||<sup>nd</sup> Floor, Vijayant Khand, Gomti Nagar, Lucknow
            - 226010
          </address>
        </div>

        <div className="flex flex-col items-center basis-[50%] border border-black rounded-t-3xl p-2">
          <HiOutlineMailOpen size={40} color="#BD283B" />
          <div>
            <a
              href="mailto:me_mayankpandey@redifmail.com"
              className="text-0 hover:text-blue-800"
            >
              me_mayankpandey@redifmail.com
            </a>

            <p className="mt-3">+91 9455746616 || +91 7985660474</p>
          </div>
        </div>
      </div>
      <div className="w-[100%] p-9">
        <div className="w-[100%]  rounded-md shadow-box pt-4">
          <div className="text-center mb-5">
            <h1 className="text-[2rem] font-bold">
              <span className="text-black mr-4">CONTACT</span>
              <span className="text-[#F58634]">US</span>
            </h1>
          </div>

          <form className="w-100% flex flex-col p-6">
            <input
              type="text"
              placeholder="NAME"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="w-100% p-2 text-[1rem] border border-black outline-none rounded-md mb-2"
            />
            <input
              type="mail"
              placeholder="EMAIL"
              value={userMail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-100% p-2 text-[1rem] border border-black outline-none rounded-md mb-2"
            />
            <textarea
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              value={userMessage}
              onChange={(e) => {
                setUserMessage(e.target.value);
              }}
              className="w-100% p-2 text-[1rem] border border-black outline-none rounded-md mb-2"
            ></textarea>
            <div className="text-center w-[100%]">
              <button
                type="button"
                className="bg-orange-400 text-white p-3 rounded-md hover:bg-orange-700 w-[100%]"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer section  */}
      <Suspense fallback={<div className="text-[2rem]">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Contact;
