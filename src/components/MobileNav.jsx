import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav({ handleToggle }) {
  return (
    <div className=" z-30 flex flex-col justify-center items-center absolute right-0 top-0 w-full min-h-screen bg-white bg-opacity-5 backdrop-blur-2xl">
      <div className=" flex flex-col items-center gap-y-5">
        <a href="#about" onClick={handleToggle} className="text-2xl text-white">
          About us
        </a>
        <a
          href="#talents"
          onClick={handleToggle}
          className="text-2xl text-white"
        >
          Find talent
        </a>
        <a
          href="#skills"
          onClick={handleToggle}
          className="text-2xl text-white"
        >
          Top skills
        </a>
        <a
          href="#testimonials"
          onClick={handleToggle}
          className="text-2xl text-white"
        >
          Testimonials
        </a>
        <Link to="Login" onClick={handleToggle}>
          <button className=" text-2xl text-black font-['Poppins]">
            Login
          </button>
        </Link>
        <Link to="signUp" onClick={handleToggle}>
          <button className=" bg-pink py-2 px-5 rounded-lg font-['Poppins'] text-2xl">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
