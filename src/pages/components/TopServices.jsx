import { Link } from "react-router-dom";
import { topSkillsData } from "../../utils/Skills";

const TopServices = () => {
  return (
    <ul className=" grid grid-cols-3 justify-between gap-2 lg:gap-3 lg:py-20 bg-mistyRose/50 p-5 bigLg:px-16">
      {topSkillsData.map(({ id, skill, link }) => (
        <li key={id} className="text-black/50 text-xs lg:text-lg">
          <Link to={link} className="active:text-purple">
            {skill}
          </Link>
        </li>
      ))}
    </ul>
)
}

export default TopServices