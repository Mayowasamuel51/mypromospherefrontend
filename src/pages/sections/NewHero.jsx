import { Link } from "react-router-dom";
import img1 from "../../assests/images/img1.png";
import img2 from "../../assests/images/img2.png";
import img3 from "../../assests/images/img3.png";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci"
import {motion} from "framer-motion"

const NewHero = () => {
  return (
    <section className={`newhero bg-center bg-cover bg-no-repeat px-4 lg:px-10 pt-40 lg:pt-32 pt-5 lg:pb-10 text-white`}>
      <div className="flex lg:items-center justify-center lg:flex-row flex-col lg:justify-between gap-4">
        <div className="hero-text relative z-50 flex flex-col gap-2 min-h-screen lg:min-h-max">
          <h1 className="lg:text-6xl text-3xl font-semibold text-white ">
            Find your <br />
            Desired Services
          </h1>
          <p className="max-w-[35rem] text-base text-white md:text-xl my-1">
            MyPromoSphere is here to revolutionize your service discovery
            experience.
          </p>
          <div className=" relative mb-4 w-11/12">
            <input type="text" name="" id="" className="w-full h-12 lg:h-16 pl-10 bg-[#D9D9D9] rounded-lg text-black outline-none" placeholder="Search for any service" />
            <i className="absolute top-1/2 left-2 -translate-y-1/2 text-3xl text-black"><CiSearch /></i>
          </div>

          <Link to="/">
            <motion.button whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}  className="bg-[#3D217A] rounded-md md:rounded-[10px] p-3 lg:p-5 text-white flex items-center  text-[1.2rem] gap-2 justify-center">
              Get Started <FaArrowRight className="" />
            </motion.button>
          </Link>
        </div>

        <div className="lg:flex lg:items-center lg:flex-row flex-col gap-4 hidden">
          <img src={img1} alt="" className="w-full lg:w-60 lg:aspect-square lg:object-cover object-center" />
          <div className="flex flex-col gap-4">
            <img src={img2} alt="" className="w-full lg:w-60 lg:aspect-square lg:object-cover object-center" />
            <img src={img3} alt="" className="w-full lg:w-60 lg:aspect-square lg:object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
