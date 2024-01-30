import React from "react";
import bgImg from "../../assests/images/Makeup artist.jpeg";
import img1 from "../../assests/images/img1.png";
import img2 from "../../assests/images/img2.png";
import img3 from "../../assests/images/img3.png";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci"
const NewHero = () => {
  return (
    <section className="newhero min-h-screen pt-20 pb-7 bg-center    bg-cover bg-no-repeat">
      <div className="max-w-[88rem] mx-auto px-5 flex justify-between items-center">
        <div className="hero-text relative z-50 flex flex-col gap-3">
          <h1 className="text-[2.3rem] md:text-[3.9rem] font-semibold text-white ">
            Find your <br />
            Desired Services
          </h1>
          <p className=" max-w-[35rem] text-[1.15rem] text-white md:text-[1.3rem] mb-2">
            MyPromoSphere is here to revolutionize your service discovery
            experience.
          </p>

          <div className=" relative mb-4 w-11/12">
            <input type="text" name="" id="" className="w-full h-16 pl-10 bg-[#D9D9D9] rounded-lg text-black outline-none" placeholder="Search for any service"/>
            <i className="absolute top-1/2 left-2 -translate-y-1/2 text-3xl text-black"><CiSearch /></i>
          </div>

          <a href="">
            <button className="bg-[#3D217A] rounded-[10px] p-5 text-white flex items-center  text-[1.2rem] gap-2 justify-center">
              Get Started <FaArrowRight className="" />
            </button>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <img src={img1} alt="" className="w-72 h-[491px]" />
          <div className="flex flex-col gap-4">
            <img src={img2} alt="" className="w-[250px] h-[318px]" />
            <img src={img3} alt="" className="w-[250px] h-[318px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
