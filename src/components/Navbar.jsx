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
    <header className=" absolute w-full bg-transparent flex flex-row justify-between items-center py-2 px-8 bigLg:px-16">
      <Link to="/" className=" flex items-center">
        <img src={logo} alt="logo" className="w-10 md:w-16 exl:w-20" />
        <h1 className=" text-sm font-bold text-white md:text-lg exl:text-xl">MyPromoSphere</h1>
      </Link>

      <div onClick={handleToggle} className=" z-20 exl:hidden">
        {toggleIcon ? (
          <XMarkIcon width={35} className=" text-white" />
        ) : (
          <Bars3BottomRightIcon width={35} className=" text-white" />
        )}
      </div>

      {toggleIcon && <MobileNav handleToggle={handleToggle} />}

      <nav className=" hidden exl:flex exl:items-center exl:gap-x-[68px]">
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
      <div className=" hidden exl:flex exl:items-center exl:gap-x-6">
        <Link to="login">
          <button className=" text-lg py-2 px-5 text-white font-['Poppins] font-semibold">
            Login
          </button>
        </Link>
        <Link to="signUp">
          <button className=" bg-pink py-2 px-5 rounded-lg text-white font-['Poppins'] text-lg font-semibold">
            Signup
          </button>
        </Link>
      </div>
    </header>
  );
}
