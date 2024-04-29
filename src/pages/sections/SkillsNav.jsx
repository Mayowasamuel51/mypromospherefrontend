import { Link } from "react-router-dom";
import { Element } from 'react-scroll';

const SkillsNav = () => {
  return (
    <>
        <Element name="skills">
            <section className="bigLg:px-10 px-1">
                <div className="grid grid-cols-3 items-center border-b-2 border-black lg:py-4 py-2">
                    <p className="text-xs lg:text-lg text-black/50">
                    <Link
                        to="/"
                        className="pb-2 focus:text-purple focus:border-4 focus:text-bold focus:border-b-purple focus:border-x-0 focus:border-t-0"
                    >
                        Top Services
                    </Link>
                    </p>
                    <p className=" text-xs lg:text-lg text-black/50">
                    <Link
                        to="/trendingSkills"
                        className="pb-2 focus:text-purple focus:border-4 focus:text-bold focus:border-b-purple focus:border-x-0 focus:border-t-0"
                    >
                        Trending Skills
                    </Link>
                    </p>
                    <p className=" text-xs lg:text-lg text-black/50">
                    <Link
                        to="/topSkillsLagos"
                        className=" pb-2 focus:text-purple focus:border-4 focus:text-bold focus:border-b-purple focus:border-x-0 focus:border-t-0"
                    >
                        Top Skills in Lagos
                    </Link>
                    </p>
                </div>
            </section>
        </Element>
    </>
  )
}

export default SkillsNav