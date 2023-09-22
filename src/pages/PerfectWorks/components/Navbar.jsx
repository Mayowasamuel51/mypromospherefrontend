import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

// assests
import logo from "../../../assests/SVGs/logo.svg";

export default function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);
  //   this function is to change the toggle state
  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <header className="w-full bg-purple flex flex-row justify-between items-center py-2 px-8 bigLg:px-16">
      <Link to="/" className=" flex items-center">
        <img src={logo} alt="logo" className="w-10 md:w-16 exl:w-20" />
        <h1 className=" text-sm font-bold text-white md:text-lg exl:text-xl">
          MyPromoSphere
        </h1>
      </Link>

      <div className="hidden sm:block flex items-center gap-x-3">
        <Link to="login">
          <button className=" text-lg py-2 px-5 font-['Poppins] text-white font-semibold">
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
