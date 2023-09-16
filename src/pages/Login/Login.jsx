import { useState } from "react";
import or from "../../assests/images/or.png";
import google from "../../assests/images/icon_google.png";
import { Link } from "react-router-dom";
import signup from "../../assests/images/signup-image.png";
import { MdNightlight } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";

const Login = () => {
  const [selected, setSelected] = useState(false);
  const [toggleLight, setToggleLight] = useState(true);
  const toggleBtn = () => {
    setToggleLight(!toggleLight);
  };
  return (
    <section className="bg-purple h-screen">
      {/* sign-up box  */}
      <div
        className={
          toggleLight
            ? "inset bg-white w-[85%] max-w-2xl rounded-3xl px-8 flex justify-between"
            : "inset bg-black w-[85%] max-w-2xl rounded-3xl px-8 flex justify-between"
        }
      >
        {/* sign-up center  */}
        <div>
          {/* back  */}
          <article className="mt-1 xs:mt-4 flex items-center justify-between">
            <Link to={"/"}>
              <button className="focus-outline-none">
                <p className={toggleLight ? "" : "text-white"}>Back</p>
              </button>
            </Link>

            <button onClick={toggleBtn}>
              {toggleLight ? (
                <MdNightlight className="text-[2rem]" />
              ) : (
                <PiSunLight className="text-white text-[2rem]" />
              )}
            </button>
          </article>
          {/* welcome back  */}
          <article className="mt-1">
            <h3
              className={
                toggleLight
                  ? "font-500 text-[1.1rem] sm:text-[1.3rem]"
                  : "font-500 text-[1.1rem] sm:text-[1.3rem] text-white"
              }
            >
             Hello Again!
            </h3>
            <p className={toggleLight ? "text-[#5F5D5D]" : "text-white"}>
             Welcome Back
            </p>
          </article>
          {/* form-field  */}
          <article className="mt-3">
            {/* form  */}
            <form>
              {/* email  */}
              <div className="flex flex-col mt-1">
                <label
                  htmlFor="name"
                  className={toggleLight ? "" : "text-white"}
                >
                  Email Address
                </label>
                <input
                  type="text"
                  className={
                    toggleLight
                      ? "w-[90%] border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px]"
                      : "w-[90%] bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1"
                  }
                  placeholder="example@gmail.com"
                />
              </div>
              {/* password  */}
              <div className="flex flex-col mt-6">
                <label
                  htmlFor="name"
                  className={toggleLight ? "" : "text-white"}
                >
                  Password
                </label>
                <input
                  type="text"
                  className={
                    toggleLight
                      ? "w-[90%] border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px]"
                      : " bg-transparent w-[90%] border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1 "
                  }
                  placeholder="Enter password"
                />
              </div>
              {/* sign-up btn  */}
              <article className="mt-7 pb-9">
                  <button className="bg-purple py-[.43rem] mx-auto text-white w-[90%] sms:max-w-[360px] ml-3 rounded-md ">
                    <p className="smax:text-[1.25rem] ">Sign up</p>
                  </button>
                <img
                  src={or}
                  alt=""
                  className="ml-3 w-[90%] sms:max-w-[360px] text-white colorize-img3"
                />
                <button className="bg-white py-[.4rem] text-dark w-[90%] sms:max-w-[360px] ml-3 rounded-full border border-black flex items-center">
                  <img src={google} alt="" className="px-3 " />
                  <p className="text-[.8rem] sm:text-[1.125rem] smax:text[1.23rem] mx-auto ">
                    Continue with Google
                  </p>
                </button>
              </article>
            </form>
            {/* end of form  */}
          </article>
        </div>

        {/* side  */}
        <div className="hidden smax:block bg-gradient-to-b from-[#EC6A87] to-[#D60DE8] absolute right-[-2rem] rounded-3xl relative">
          <h1 className="px-12 max-w-[20rem] smax:mt-[4rem] lg:mt-22 md:mt-12 text-black font-700">
            Find hundreds of services online and post your own content too.
          </h1>
          <div className="absolute hidden md:top-[10rem] smax:left-[-2rem] smax:top-[11rem] md:left-[-2rem] large:top-[9.5rem] smax:block">
            <img src={signup} alt="" className=" smax:w-[220px] md:w-[270px] large:w-[280px] " />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;

