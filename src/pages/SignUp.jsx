import { useState } from "react";
import or from "../assests/images/or.png"
import google from "../assests/images/icon_google.png"
import signup from "../assests/images/signup-image.png"
import { Link } from "react-router-dom";


const SignUp = () => {
    const[selected, setSelected] = useState("false")
  return (
    // sign-up
    <section className="bg-purple h-screen">
      {/* sign-up-center  */}
      <div className="inset bg-white w-[80%] flex justify-between rounded-3xl max-w-5xl">
        {/* sign-up-field  */}
        <div className="px-12 py-4">
          {/* back  */}
          <article>
            <Link to={"/"}> 
              <button>
                <p>Back</p>
              </button>
            </Link>
          </article>

          {/* form-field */}
          <article className="mt-[1rem] px-4">
            {/* create-account  */}
            <div>
              <h3 className="text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] font-500">
                Create{" "}
                <span className="text-blue text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] font-500">
                  Account
                </span>
              </h3>
              <p>
                Already have an account? <span className="text-red">Login</span>
              </p>
            </div>
            {/* form  */}
            <div className="mt-4">
              <form>
                {/* Name-input  */}
                <div className="flex flex-col">
                  <label htmlFor="name" className=" ">
                    Name
                  </label>
                  <input
                    type="text"
                    spellCheck={false}
                    className="border border-black border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-2"
                    placeholder="Full name"
                  />
                </div>
                {/* Email-Address  */}
                <div className="flex flex-col mt-4">
                  <label htmlFor="email" className=" ">
                    Email
                  </label>
                  <input
                    type="email"
                    spellCheck={false}
                    className="border border-black border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-2"
                    placeholder="example@gmail.com"
                  />
                </div>
                {/*Password*/}
                <div className="flex flex-col mt-4">
                  <label htmlFor="password" className=" ">
                    Password
                  </label>
                  <input
                    type=""
                    spellCheck={false}
                    className="border border-black border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-2"
                    placeholder="Enter password"
                  />
                </div>
                {/*agreement*/}
                <article className="flex items-center gap-[1rem]">
                  {/* toggle  */}
                  <div
                    className="bg-grey border relative mt-4 w-[2.6rem] xxs:w-16 h-6 md:w-[2.6rem] max-w-[40px] rounded-full cursor-pointer"
                    onClick={() => setSelected(!selected)}
                  >
                    <span
                      className={
                        selected
                          ? "w-2/5 h-4/5 bg-white absolute rounded-full left-[.2rem] top-[.15rem] transition-all duration-500"
                          : "w-2/5 h-4/5 bg-black absolute rounded-full left-[.0rem]  ml-5 smd:top-[.15rem]  transition-all duration-500"
                      }
                    ></span>
                  </div>
                  {/* text  */}
                  <p className="mt-5 max-w-[20rem]">
                    I agree to the{" "}
                    <span className="text-blue"> Platforms Terms </span>of
                    service and{" "}
                    <span className="text-blue">Privacy policy</span>
                  </p>
                </article>
              </form>
            </div>
          </article>
          {/* end of form-field  */}

          {/* sign-up btn  */}
          <article className="mt-4">
            <button className="bg-purple text-white w-[100%] sms:max-w-[360px] ml-3 mt-6 rounded-md ">
              <p className="py-3 smax:text-[1.25rem] ">Sign up</p>
            </button>
            <img src={or} alt="" className="ml-3 sms:max-w-[360px]" />
            <button className="bg-white text-dark w-[100%] sms:max-w-[360px] ml-3 mt-1 rounded-full border border-black flex items-center ">
              <img src={google} alt="" className="px-3" />
              <p className="py-3 smax:text-[1.25rem] ml-7">
                Continue with Google
              </p>
            </button>
          </article>
        </div>

        {/* side  */}
        <div className="hidden md:block bg-gradient-to-b from-[#EC6A87] to-[#D60DE8] w-[40%] rounded-3xl relative">
          <h1 className="px-12 max-w-[20rem] mt-24 text-black font-700">
            Find hundreds of services online and post your own content too.
          </h1>
          <div className="absolute hidden  top-[14rem] lg:left-[-3rem] xlg:left-[-5rem] large:left-[-8rem] large:top-[12rem] lg:block">
            <img src={signup} alt="" className="w-[300px] large:w-[380px] " />
          </div>
        </div>
      </div>
      {/* end of sign-up-center  */}
    </section>
    // end of sign-up
  );
}

export default SignUp