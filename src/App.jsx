import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";
import AboutComponent from "./Components/AboutComponent/AboutComponent";
import Contact from "./Components/Contact/Contact";

import Menu from "./Components/Menu/Menu";
import NavSection from "./Components/Nav/NavSection";
import ProjectComponent from "./Components/ProjectComponent/ProjectComponent";

import Whatsapp from "./Components/Whatsapp/Whatsapp";

import { useEffect, useState } from "react";

function App() {
  const [isFalse, setIsFalse] = useState(true);
  useEffect(() => {
    const scrollEve = () => {
      if (window.scrollY >= 2) {
        setIsFalse(false);
      } else {
        setIsFalse(true);
      }
    };
    scrollEve();
    window.addEventListener("scroll", scrollEve);

    return () => {
      window.removeEventListener("scroll", scrollEve);
    };
  }, []);

  return (
    <BrowserRouter>
      {isFalse && <Menu />}
      <NavSection />
      <Whatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<ProjectComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
