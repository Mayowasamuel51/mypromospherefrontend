import { ArrowRightIcon } from "@heroicons/react/24/solid";
import HeroImage from "../../assests/images/heroImage.svg";
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className=" pt-28 px-8 bg-gradient-to-r from-pink via-purple2 to-purple bigLg:pt-36 bigLg:px-16">
      <div className=" absolute right-0 top-0 bg-purple h-full w-40 "></div>
      <div className=" flex flex-col items-center gap-y-10 bigLg:flex-row bigLg:gap-x-20">
        <div className=" flex flex-col items-center bigLg:items-start bigLg:basis-1/2">
          <h1 className=" font-['Poppins'] text-5xl font-bold leading-10 text-center bigLg:text-start bigLg:text-6xl">
            Find your
          </h1>
          <p className="font-['Poppins'] text-5xl font-bold leading-10 text-center bigLg:text-start bigLg:text-6xl">
            desired services
          </p>
          <p className=" font-['Poppins'] font-medium my-7 leading-5 text-center bigLg:text-start bigLg:text-xl bigLg:leading-6">
            <span className=" tracking-[-1.8px]">MyPromoSphere</span> is here to
            revolutionize your service discovery experience.
          </p>
          <Link to={"layout"}>
            <button className=" bg-purple py-3 px-4 rounded-md text-white flex items-center gap-x-5">
              Get Started
              <ArrowRightIcon width={20} />
            </button>
          </Link>
        </div>
        <div className=" bigLg:basis-1/2">
          {/* this is where the image will be when it's ready */}
          <img src={HeroImage} alt="" className="" />
        </div>
      </div>
    </section>
  );
}
