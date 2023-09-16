import React from 'react'
import Navbar from '../../components/Navbar';
import { CiSearch } from "react-icons/ci";
import darkBox from "../../assests/images/darkBox.png"
import rightFilter from "../../assests/images/right-filter.png"
import leftFilter from "../../assests/images/left-filter.png"
import Images from './components/Images';

const Works = () => {
  return (
    <>
      <Navbar />
      {/* peferct works  */}
      <section className="p-6">
        {/* heading */}
        <div className="px-5 bigLg:px-12 mt-12 md:mt-20 ">
          <h1 className="text-[2rem] md:text-[3rem] md:max-w-md font-600">
            {" "}
            Perfect works made for you
          </h1>
          {/* search field  */}
          <div className="">
            {/* search-bar  */}
            <article className="relative flex items-center mt-5">
              <CiSearch className="absolute text-2xl ml-2 text-navToggle" />
              <input
                type="text"
                placeholder="Search"
                className=" pr-[1rem] pl-9 border placeholder:text-navToggle placeholder:text-md focus:outline-none p-[.7rem] rounded-md  w-[80%] bigLg:w-[80%] shadow-md "
              />
              {/* end of searchbar  */}
              {/* filter-box  */}
              <div className="relative cursor-pointer">
                <div className="border sm:w-[3.5rem] sm:h-[3.4rem] md:w-[3.4rem] md:h-[3.5rem] rounded-[.8rem] bg-black"></div>
                {/* filters */}
                <div className="flex absolute inset">
                  <img src={leftFilter} alt="" className="w-[45%] h-full" />
                  <img src={rightFilter} alt="" className="w-[45%] h-[100%]" />
                </div>
              </div>
            </article>
          </div>
          {/* images  */}
          <div className="mx-auto">
            <Images />
          </div>
        </div>
      </section>
    </>
  );
}

export default Works