import React, { useState } from 'react'
import Navbar from "../PerfectWorks/components/Navbar"
import { CiSearch } from "react-icons/ci";
import darkBox from "../../assests/images/darkBox.png"
import rightFilter from "../../assests/images/right-filter.png"
import leftFilter from "../../assests/images/left-filter.png"
import Images from './components/Images';
import {GrFormClose} from "react-icons/gr"

const Works = () => {
const[search, setSearch] = useState('')
const [searchTerms, setSearchTerms] = useState([])
const handleChange = (e)=>{
  setSearch(e.target.value)
}
const handleSubmit = (e)=>{
   e.preventDefault()
   if (search) {
     const searchTerm = { id: new Date().getTime().toString(), search};
           setSearchTerms((searchTerms) => {
             return [...searchTerms, searchTerm];
           });
   }
   setSearch('')
  //  setSearchTerms([])
}
const handleClose =(id)=>{
 const removeSearch = searchTerms.filter((item)=> item.id !== id)
 setSearchTerms(removeSearch)
}
return (
  <>
    <Navbar />
    {/* peferct works  */}
    <section className="p-6">
      {/* heading */}
      <div className="px-5 bigLg:px-12">
        <h1 className="text-[2rem] md:text-[3rem] md:max-w-md font-600">
          {" "}
          Perfect works made for you
        </h1>
        {/* search field  */}
        <div className="">
          {/* search-bar  */}
          <form onSubmit={handleSubmit}>
            <article className="relative flex items-center mt-5">
              <CiSearch className="absolute text-2xl ml-2 text-navToggle" />
              <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search"
                className=" pr-[1rem] pl-9 border placeholder:text-navToggle placeholder:text-md focus:outline-none p-[.7rem] rounded-md  w-[80%] bigLg:w-[80%] shadow-md "
              />
              {/* end of searchbar  */}
              {/* filter-box  */}
              <div className="relative cursor-pointer">
                <div className="border w-[3.5rem] h-[3.4rem] sm:w-[3.5rem] sm:h-[3.4rem] md:w-[3.4rem] md:h-[3.5rem] rounded-[.8rem] bg-black"></div>
                {/* filters */}
                <div className="flex absolute inset">
                  <img src={leftFilter} alt="" className="w-[45%] h-full" />
                  <img src={rightFilter} alt="" className="w-[45%] h-[100%]" />
                </div>
              </div>
            </article>
          </form>
          {/* searchTerms */}
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 smax:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 large:grid-cols-7 gap-x-3 mt-5 max-w-5xl">
            {searchTerms.map(function (item) {
              const { search, id } = item;
              return (
                <div
                  className="bg-white flex justify-between w-full  shadow-md p-4 px-7 rounded-md items-center gap-x-2 mt-5"
                  key={id}
                >
                  <h1>{search}</h1>
                  <GrFormClose
                    className="text-[1.2rem] cursor-pointer"
                    onClick={() => handleClose(id)}
                  />
                </div>
              );
            })}
          </div>
          {/* end of searchTerms */}
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