import { Suspense, lazy } from "react";
import "./Home.css";

const Footer = lazy(() => import("../Footer/Footer"));

const AboutComp = lazy(() => import("../About/About"));
const ProjectComp = lazy(() => import("../Projects/Project"));

const Home = () => {
  return (
    <div>
      <div className="w-[98.7vw] h-[100vh] bg-img flex justify-center items-center">
        <div className="text-[4rem] font-extrabold text-center ">
          <h1>
            Building Dreams,
            <span className="text-orange-500"> Creating Futures </span>
          </h1>
        </div>
      </div>

      <div>
        <Suspense fallback={<div className="text-[2rem]">Loading...</div>}>
          <AboutComp />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div className="text-[2rem]">Loading...</div>}>
          <ProjectComp />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div className="text-[2rem]">Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
