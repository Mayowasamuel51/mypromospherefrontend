import React from "react";
import bgImg from "../../assests/images/Makeup artist.jpeg";
import { FaArrowRight } from "react-icons/fa";
const NewHero = () => {
  return (
    <section className="newhero min-h-screen pt-20 bg-center    bg-cover bg-no-repeat bgimg">
      <div className="max-w-[88rem] mx-auto px-5 ">
        <div className="hero-text relative z-50 flex flex-col gap-3">
          <h1 className="text-[2.3rem] md:text-[3.9rem] font-semibold text-white ">
            Find your <br />
            Desired Services
          </h1>
          <p className=" max-w-[35rem] text-[1.15rem] text-white md:text-[1.3rem] mb-2">
            MyPromoSphere is here to revolutionize your service discovery
            experience.
          </p>
          <a href="">
            <button className="bg-[#3D217A] rounded-[10px] p-5 text-white flex items-center  text-[1.2rem] gap-2 justify-center">
              Get Started <FaArrowRight className="" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
