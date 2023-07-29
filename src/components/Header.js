import React from "react";
//image
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="py-10">
      <div>
        {/* <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50"> */}
        <div className="flex justify-between items-center w-full bg-white/20 h-[130px]  backdrop-blur-2xl rounded-full">
          <img
            src={logo}
            alt=""
            style={{ height: "150px", width: "250px", borderRadius: "50%" }}
          />
          <a href="/resume.pdf" download="resume.pdf">
            <button className="btn btn-sm">Download My Resume</button>
          </a>

          <button className="btn btn-sm">
            <a href="#contact">Work with me</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
