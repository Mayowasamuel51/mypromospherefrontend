import { ArrowRightIcon } from "@heroicons/react/24/solid";
import HeroImage from "../../assests/images/heroImage.svg";
import { Link } from 'react-router-dom'
const HeroTwo = () => {
  return (
    <section className=" h-screen px-8 bg-gradient-to-r from-pink to-purple2 bigLg:pt-36 bigLg:px-16">
      <div className="">
        <div>
          <h1 className=" font-['Poppins'] text-5xl font-bold leading-10 text-center bigLg:text-start bigLg:text-6xl">
            Find your
          </h1>
          <p className=" font-['Poppins'] text-5xl font-bold leading-10 text-center bigLg:text-start bigLg:text-6xl">
            desired services
          </p>
          <p className=" font-['Poppins'] font-medium my-7 leading-5 text-center bigLg:text-start bigLg:text-xl bigLg:leading-6">
            <span className=" tracking-[-1.8px]">MyPromoSphere</span> is here to
            revolutionize your service discovery experience.
          </p>
          <Link to={"layout"} className="">
            <button className=" bg-purple py-3 px-4 rounded-md text-white flex items-center gap-x-5">
              Get Started
              <ArrowRightIcon width={20} />
            </button>
          </Link>
        </div>
        <div className=" bigLg:basis-1/2">
          {/* this is where the image will be when it's ready */}
          <img src={HeroImage} alt="" className=" h-64" />
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
