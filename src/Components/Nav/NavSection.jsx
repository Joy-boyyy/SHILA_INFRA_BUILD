import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavSection = () => {
  const [menuSelect, setMenuSelect] = useState("Home");
  const [menuData, setMenuData] = useState(true);

  const toSetMenu = (menuData) => {
    setMenuSelect(menuData);
  };

  return (
    <header className="w-[100%]  flex flex-row justify-center items-center sticky top-0 left-0 z-[2]">
      {/* ---------menu */}

      <GiHamburgerMenu
        size={30}
        // className=" lg:hidden"
        onClick={() => {
          setMenuData((prevData) => !prevData);
        }}
        color="#BD283B"
        className="cursor-pointer"
      />

      {menuData && (
        <nav className="w-[80%] bg-[#BD283B] border-l-8 border-l-[#F58634]  ">
          <ul className="list-none flex lg:flex-row flex-col gap-10 justify-center">
            <Link to="/">
              <li
                className={`text-white cursor-pointer text-[20px] h-[100%] p-3 border-t-0 hover:border-t-4 border-orange-500 ${
                  menuSelect === "Home" ? "bg-[#b76b2e]" : ""
                }`}
                onClick={() => {
                  toSetMenu("Home");
                }}
              >
                HOME
              </li>
            </Link>

            <Link to="/project">
              <li
                className={`text-white cursor-pointer text-[20px] h-[100%] p-3 border-t-0 hover:border-t-4 border-orange-500 ${
                  menuSelect === "Projects" ? "bg-[#b76b2e]" : ""
                }`}
                onClick={() => {
                  toSetMenu("Projects");
                }}
              >
                PROJECTS
              </li>
            </Link>

            <Link to="/gallery">
              <li
                className={`text-white cursor-pointer text-[20px] h-[100%] p-3 border-t-0 hover:border-t-4 border-orange-500 ${
                  menuSelect === "Gallery" ? "bg-[#b76b2e]" : ""
                }`}
                onClick={() => {
                  toSetMenu("Gallery");
                }}
              >
                GALLERY
              </li>
            </Link>

            <Link to="/about">
              <li
                className={`text-white cursor-pointer text-[20px] h-[100%] p-3 border-t-0 hover:border-t-4 border-orange-500 ${
                  menuSelect === "About" ? "bg-[#b76b2e]" : ""
                }`}
                onClick={() => {
                  toSetMenu("About");
                }}
              >
                ABOUT US
              </li>
            </Link>

            <Link to="/contact">
              <li
                className={`text-white cursor-pointer text-[20px] h-[100%] p-3 border-t-0 hover:border-t-4 border-orange-500 ${
                  menuSelect === "Contact" ? "bg-[#b76b2e]" : ""
                }`}
                onClick={() => {
                  toSetMenu("Contact");
                }}
              >
                CONTACT US
              </li>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavSection;
