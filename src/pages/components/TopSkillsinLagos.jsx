import { NigeriaSkillsData } from "../../utils/Skills";
import { Link } from "react-router-dom";

const TopSkillsinLagos = () => {
  return (
    <ul className=" grid grid-cols-3 justify-between gap-3 bg-mistyRose/50 p-5 bigLg:px-16">
        {NigeriaSkillsData.map(({ id, skill }) => (
        <li key={id} className=" text-black/50 text-lg">
            <Link to="/" className=" active:text-purple">
            {skill}
            </Link>
        </li>
        ))}
    </ul>
  )
}

export default TopSkillsinLagos