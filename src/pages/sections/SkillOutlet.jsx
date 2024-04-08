import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const SkillOutlet = () => {
  return (
    <>
        <section className="bigLg:px-10 px-4">
            <div className="grid grid-cols-3 justify-between border-b-2 border-black py-4">
                <p className="text-base lg:text-lg text-black/50">
                <Link
                    to="/"
                    className=" pb-2 focus:text-purple focus:border-2 focus:border-b-purple focus:border-x-0 focus:border-t-0"
                >
                    Top Services
                </Link>
                </p>
                <p className=" text-base lg:text-lg text-black/50">
                <Link
                    to="/"
                    className="pb-2 focus:text-purple focus:border-2 focus:border-b-purple focus:border-x-0 focus:border-t-0"
                >
                    Trending Skills
                </Link>
                </p>
                <p className=" text-base lg:text-lg text-black/50">
                <Link
                    to="/"
                    className=" pb-2 focus:text-purple focus:border-2 focus:border-b-purple focus:border-x-0 focus:border-t-0"
                >
                    Top Skills in Lagos
                </Link>
                </p>
            </div>
        </section>
        {/* <Outlet /> */}
    </>
  )
}

export default SkillOutlet