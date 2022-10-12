import React from "react";
import Logo from '../images/codrythLogo.jpg'
function Home() {
  return (
    <div className="">
      <div className="mx-30 h-[674px] ">
        <div className=" flex lg:flex-row   h-full flex-col  ">
          <div className="lg:w-1/6 w-0"></div>
          <div className="lg:w-1/2 pl-4 pt-28  w-full">
            <p
              className="text-6xl font-sans font-bold"
              style={{ color: "#3b3663" }}
            >
              Digitise Your <br></br>{" "}
              <span className="pt-2" style={{ color: "#30adc9" }}>
                Business
              </span>
            </p>
            <p className="pt-4">
              Here at CodeRythm, We build systems that are user-friendly{" "}
              <br></br> and intelligent.
            </p>
            <button  class=" mt-12 font-sans bg-pink-700 hover:bg-pink-800 text-white  py-2 px-4 rounded">
              
              Talk To Our Experts
            </button>
          </div>

          <div className="lg:w-1/2 pl-5  w-full mt-4">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
