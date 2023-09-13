import { useState } from "react";

export default function Skills() {
  const topSkillsData = [
    {
      id: 1,
      skill: "Fashion Designer",
    },
    {
      id: 2,
      skill: "Content Writer",
    },
    {
      id: 3,
      skill: "Barber",
    },
    {
      id: 4,
      skill: "Videography",
    },
    {
      id: 5,
      skill: "Photography",
    },
    {
      id: 7,
      skill: "Driver",
    },
    {
      id: 8,
      skill: "Copywriter",
    },
    {
      id: 9,
      skill: "Event Planner",
    },
    {
      id: 10,
      skill: "Welder",
    },
    {
      id: 11,
      skill: "Hair Dresser",
    },
    {
      id: 12,
      skill: "Electrical Installer",
    },
    {
      id: 13,
      skill: "Catering",
    },
    {
      id: 14,
      skill: "Mechanics",
    },
    {
      id: 15,
      skill: "Plumbing",
    },
    {
      id: 16,
      skill: "Bricklayering",
    },
  ];
  const trendingSkillsData = [
    {
      id: 1,
      skill: "Digital Marketing",
    },
    {
      id: 2,
      skill: "Content Writing",
    },
    {
      id: 3,
      skill: "Electrician",
    },
    {
      id: 4,
      skill: "Video Filming",
    },
    {
      id: 5,
      skill: "Sales management",
    },
    {
      id: 7,
      skill: "Interior Decoration",
    },
    {
      id: 8,
      skill: "UX Design",
    },
    {
      id: 9,
      skill: "Hair dresser/stylist",
    },
    {
      id: 10,
      skill: "Foreign language",
    },
    {
      id: 11,
      skill: "Landscape designer",
    },
    {
      id: 12,
      skill: "Tech skills",
    },
    {
      id: 13,
      skill: "Project management",
    },
    {
      id: 14,
      skill: "Copy writing",
    },
    {
      id: 15,
      skill: "Marketing",
    },
    {
      id: 16,
      skill: "Illustrators",
    },
  ];
  const NigeriaSkillsData = [
    {
      id: 1,
      skill: "Legal skills",
    },
    {
      id: 2,
      skill: "Technology skills",
    },
    {
      id: 3,
      skill: "Project management",
    },
    {
      id: 4,
      skill: "Finance management",
    },
    {
      id: 5,
      skill: "Mechanics and Auto Repair",
    },
    {
      id: 7,
      skill: "Marketing & sales",
    },
    {
      id: 8,
      skill: "SEO Experts",
    },
    {
      id: 9,
      skill: "UX design",
    },
    {
      id: 10,
      skill: "Digital marketing",
    },
    {
      id: 11,
      skill: "Virtual assistants",
    },
    {
      id: 12,
      skill: "Design skills",
    },
    {
      id: 13,
      skill: "Copywriting",
    },
    {
      id: 14,
      skill: "Fashion designers",
    },
    {
      id: 15,
      skill: "Web designers",
    },
    {
      id: 16,
      skill: "Social media marketing",
    },
  ];

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
        <h3
          onClick={toggleTopSkills}
          className=" text-3xl text-black active:text-purple hover:cursor-pointer"
        >
          Top Skills
        </h3>
        <h3
          onClick={toggleTrendingSkills}
          className=" text-3xl text-black active:text-purple hover:cursor-pointer"
        >
          Trending Skills
        </h3>
        <h3
          onClick={toggleNigeriaSkills}
          className=" text-3xl text-black active:text-purple hover:cursor-pointer"
        >
          Top Skills in Nigeria
        </h3>
      </div>
      <div className=" bigLg:px-16">
        <hr className=" my-3 bg-black" />
      </div>
      {showTopSkills && (
        <ul className=" grid grid-cols-3 justify-between gap-3 bg-mistyRose/50 p-5 bigLg:px-16">
          {topSkillsData.map(({ id, skill }) => (
            <li key={id} className=" text-black/50 text-lg">
              {skill}
            </li>
          ))}
        </ul>
      )}
      {showTrendingSkills && (
        <ul className=" grid grid-cols-3 justify-between gap-3 bg-mistyRose/50 p-5 bigLg:px-16">
          {trendingSkillsData.map(({ id, skill }) => (
            <li key={id} className=" text-black/50 text-lg">
              {skill}
            </li>
          ))}
        </ul>
      )}
      {showNigeriaSkills && (
        <ul className=" grid grid-cols-3 justify-between gap-3 bg-mistyRose/50 p-5 bigLg:px-16">
          {NigeriaSkillsData.map(({ id, skill }) => (
            <li key={id} className=" text-black/50 text-lg">
              {skill}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
