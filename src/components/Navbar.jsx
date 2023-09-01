import { Link } from "react-router-dom";
import { useState } from "react";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

// assests
import logo from "../assests/SVGs/logo.svg";

export default function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);
  //   this function is to change the toggle state
  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <header className=" bg-purple flex flex-row justify-between items-center py-4 px-8">
      <Link to="/">
        <img src={logo} alt="logo" className=" w-40 lg:w-[360px]" />
      </Link>

      <div onClick={handleToggle} className=" z-20 lg:hidden">
        {toggleIcon ? (
          <XMarkIcon width={35} />
        ) : (
          <Bars3BottomRightIcon width={35} />
        )}
      </div>

      <nav className=" hidden lg:flex lg:items-center lg:gap-x-[68px]">
        <a href="#about" className=" text-xl font-semibold font-['Inter']">
          About us
        </a>
        <a href="#talents" className=" text-xl font-semibold font-['Inter']">Find talent</a>
        <a href="#skills" className=" text-xl font-semibold font-['Inter']">Top skills</a>
        <a href="#testimonials" className=" text-xl font-semibold font-['Inter']">Testimonials</a>
      </nav>
      <div className=" hidden lg:flex lg:items-center lg:gap-x-6">
        <button className=" text-xl text-white font-['Poppins] font-semibold leading-[51px]">Login</button>
        <button className=" bg-pink py-1 px-5 rounded-lg font-['Poppins'] text-xl font-semibold leading-[51px]">Signup</button>
      </div>
    </header>
  );
}
