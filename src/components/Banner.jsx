import React from "react";

function Banner() {
  return (
    <div className="w-full  border-0 md:border-b-4 border-[aqua] flex flex-col md:flex-row">
      <div className="w-[60%] text-4xl md:text-8xl text-white font-bold px-5 py-10 ">
        Build your <span className="text-[blue]">resume</span> <br></br> with us
        in <span className="text-[blue]">free </span>. <br></br>{" "}
        <span className="text-7xl pt-5">
          Guided by 💖 <span className="text-[blue]">Industry Experts</span>{" "}
          with <span className="text-[red] ">Love</span>
        </span>
      </div>
      
      <div className="w-full md:w-[40%] h-[60vh]  px-2 pt-5   md:px-5">
            <img src='./resume-removebg-preview.png' alt='bannerImg' className="w-full h-full object-cover " ></img>
      </div>
    </div>
  );
}

export default Banner;
