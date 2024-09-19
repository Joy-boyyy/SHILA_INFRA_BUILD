import { Suspense, lazy } from "react";
import "./Gallery.css";

const Footer = lazy(() => import("../Footer/Footer"));

const ImgGallery = lazy(() => import("../ImgGallery/ImgGallery"));

const ProjectLocation = lazy(() =>
  import("../ProjectLocationCom/ProjectLocation")
);

const Gallery = () => {
  return (
    <div className="w-[100%]">
      <div className="w-[100%] h-[100vh] bg-img-Gallery flex justify-center items-center">
        <div className="text-[4rem] font-extrabold text-center">
          <h1 className="text-white">GALLERY</h1>
        </div>
      </div>

      <div className="h-[100vh] w-[100%] pt-3">
        {/*--------------- Gallery section */}
        <div className="text-center w-[100%]">
          <h1 className="text-[3rem] font-bold">PROPERTIES</h1>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <ImgGallery />
        </Suspense>

        {/* ---------project location */}
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectLocation />
        </Suspense>
        {/* -------------- Footer */}
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Gallery;
