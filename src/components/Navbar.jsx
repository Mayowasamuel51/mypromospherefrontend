import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

// assests
import logo from "../assests/SVGs/logo.svg";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);
  //   this function is to change the toggle state
  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <header className=" bg-white flex flex-row justify-between items-center py-4 px-8">
      <Link to="/">
        <img src={logo} alt="logo" className="w-20" />
      </Link>

      <div onClick={handleToggle} className=" z-20 bigLg:hidden">
        {toggleIcon ? (
          <XMarkIcon width={35} />
        ) : (
          <Bars3BottomRightIcon width={35} />
        )}
      </div>

      {toggleIcon && <MobileNav handleToggle={handleToggle} />}

      <nav className=" hidden bigLg:flex bigLg:items-center bigLg:gap-x-[68px]">
        <a href="#about" className=" text-lg font-semibold font-['Inter']">
          About us
        </a>
        <a href="#talents" className=" text-lg font-semibold font-['Inter']">
          Find talent
        </a>
        <a href="#skills" className=" text-lg font-semibold font-['Inter']">
          Top skills
        </a>
        <a
          href="#testimonials"
          className=" text-lg font-semibold font-['Inter']"
        >
          Testimonials
        </a>
      </nav>
      <div className=" hidden bigLg:flex bigLg:items-center bigLg:gap-x-6">
        <button className=" text-lg text-black font-['Poppins] font-semibold leading-[51px]">
          Login
        </button>
        <Link to="signUp">
          <button className=" bg-pink py-1 px-5 rounded-lg font-['Poppins'] text-lg font-semibold leading-[51px]">
            Signup
          </button>
        </Link>
      </div>
    </header>
  );
}
