import { useState } from "react";
import { Link } from "react-router-dom";
import { topSkillsData,trendingSkillsData,NigeriaSkillsData } from "../../utils/Skills";

export default function Skills() {

  // when the components render, only the skills under top skills will show and the rest will show when their respective titles are clicked
  const [showTopSkills, setShowTopSkills] = useState(true);
  const [showTrendingSkills, setShowTrendingSkills] = useState(false);
  const [showNigeriaSkills, setShowNigeriaSkills] = useState(false);

  const toggleTopSkills = () => {
    setShowTopSkills(true);
    setShowTrendingSkills(false);
    setShowNigeriaSkills(false);
  };
  const toggleTrendingSkills = () => {
    setShowTopSkills(false);
    setShowTrendingSkills(true);
    setShowNigeriaSkills(false);
  };
  const toggleNigeriaSkills = () => {
    setShowTopSkills(false);
    setShowTrendingSkills(false);
    setShowNigeriaSkills(true);
  };
  return (
    <section className=" hidden bigLg:block py-16 bigLg:py-20">
      <div className=" grid grid-cols-3 justify-between bigLg:px-16">
        <h3 onClick={toggleTopSkills} className=" text-3xl text-black/50">
          <Link
            to="/"
            className=" pb-2 focus:text-purple focus:border-2 focus:border-b-purple focus:border-x-0 focus:border-t-0"
          >
            Top Skills in Abuja
          </Link>
        </h3>
        <h3 onClick={toggleTrendingSkills} className=" text-3xl text-black/50">
          <Link
            to="/"
            className=" pb-2 focus:text-purple focus:border-2 focus:border-b-purple focus:border-x-0 focus:border-t-0"
          >
            Trending Skills
          </Link>
        </h3>
        <h3 onClick={toggleNigeriaSkills} className=" text-3xl text-black/50">
          <Link
            to="/"
            className=" pb-2 focus:text-purple focus:border-2 focus:border-b-purple focus:border-x-0 focus:border-t-0"
          >
            Top Skills in Lagos
          </Link>
        </h3>
      </div>
      <div className=" bigLg:px-16">
        <hr className=" my-3 bg-black" />
      </div>
      {showTopSkills && (
        <ul className=" grid grid-cols-3 justify-between gap-3 bg-mistyRose/50 p-5 bigLg:px-16">
          {topSkillsData.map(({ id, skill }) => (
            <li key={id} className=" text-black/50 text-lg">
              <Link to="/" className=" active:text-purple">
                {skill}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {showTrendingSkills && (
        <ul className=" grid grid-cols-3 justify-between gap-3 bg-mistyRose/50 p-5 bigLg:px-16">
          {trendingSkillsData.map(({ id, skill }) => (
            <li key={id} className=" text-black/50 text-lg">
              <Link to="/" className=" active:text-purple">
                {skill}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {showNigeriaSkills && (
        <ul className=" grid grid-cols-3 justify-between gap-3 bg-mistyRose/50 p-5 bigLg:px-16">
          {NigeriaSkillsData.map(({ id, skill }) => (
            <li key={id} className=" text-black/50 text-lg">
              <Link to="/" className=" active:text-purple">
                {skill}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
