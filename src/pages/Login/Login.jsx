// import { useState } from "react";
// import or from "../../assests/images/or.png";
// import google from "../../assests/images/icon_google.png";
// import signup from "../../assests/images/signup-image.png";
// import { Link } from "react-router-dom";
// import { MdNightlight } from "react-icons/md";
// import { PiSunLight } from "react-icons/pi";

// const Login = () => {
//   const [selected, setSelected] = useState(false);
//   const [toggleLight, setToggleLight] = useState(true);
//   const toggleBtn = () => {
//     setToggleLight(!toggleLight);
//   };
//   return (
//     // sign-up
//     <section className="bg-purple h-screen">
//       {/* sign-up-center  */}
//       <div
//         className={
//           toggleLight
//             ? `inset bg-white w-[80%] flex justify-between rounded-3xl max-w-5xl`
//             : `inset bg-black w-[80%] flex justify-between rounded-3xl max-w-5xl`
//         }
//       >
//         {/* sign-up-field  */}
//         <div className="px-12 py-4 pt-[3rem]">
//           {/* back  */}
//           <article className="flex justify-between">
//             <Link to={"/"}>
//               <button>
//                 <p className={toggleLight ? "" : "text-white"}>Back</p>
//               </button>
//             </Link>
//             <button onClick={toggleBtn}>
//               {toggleLight ? (
//                 <MdNightlight className="text-[2rem]" />
//               ) : (
//                 <PiSunLight className="text-white text-[2rem]" />
//               )}
//             </button>
//           </article>

//           {/* form-field */}
//           <article className="mt-[0rem] px-4">
//             {/* create-account  */}
//             <div>
//               <h3
//                 className={
//                   toggleLight
//                     ? "text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] font-500"
//                     : "text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] font-500 text-white"
//                 }
//               >
//                 Hello There
//               </h3>
//               <p className={toggleLight ? "" : "text-white"}>
//                Welcome Back
//               </p>
//             </div>
//             {/* form  */}
//             <div className="mt-4">
//               <form>

//                 {/* Email-Address  */}
//                 <div className="flex flex-col mt-4">
//                   <label
//                     htmlFor="email"
//                     className={toggleLight ? " " : "text-white"}
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     spellCheck={false}
//                     className={
//                       toggleLight
//                         ? "border border-black border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-2"
//                         : " text-white bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-2 "
//                     }
//                     placeholder="example@gmail.com"
//                   />
//                 </div>
//                 {/*Password*/}
//                 <div className="flex flex-col mt-4">
//                   <label
//                     htmlFor="password"
//                     className={toggleLight ? " " : "text-white"}
//                   >
//                     Password
//                   </label>
//                   <input
//                     type=""
//                     spellCheck={false}
//                     className={
//                       toggleLight
//                         ? "border border-black border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-2"
//                         : " text-white bg-transparent  border border-white border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-2 "
//                     }
//                     placeholder="Enter password"
//                   />
//                   <div className="flex mt-2 justify-between cursor-pointer">
//                     <p></p>
//                     <p className={toggleLight ? "justify-end smd:mr-[2.5rem] md:mr-[.4rem] lg:mr-[3rem]": "justify-end smd:mr-[2.5rem] md:mr-[.4rem] lg:mr-[3rem] text-white"}>Forgot Password?</p>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </article>
//           {/* end of form-field  */}

//           {/* sign-up btn  */}
//           <article className="mt-0 pb-[2.5rem]">
//             <Link to={"/layout"}>
//               <button className="bg-purple text-white w-[100%] sms:max-w-[360px] ml-3 mt-4 rounded-md ">
//                 <p className="py-3 smax:text-[1.25rem] ">Sign up</p>
//               </button>
//             </Link>
//             <img
//               src={or}
//               alt=""
//               className="ml-3 sms:max-w-[360px] text-white colorize-img3"
//             />
//             <button className="bg-white text-dark w-[100%] sms:max-w-[360px] ml-3 mt-0 rounded-full border border-black flex items-center ">
//               <img src={google} alt="" className="px-3 " />
//               <p className="py-3 smax:text-[1.25rem] ml-7">
//                 Continue with Google
//               </p>
//             </button>
//           </article>
//         </div>

//         {/* side  */}
//         <div className="hidden md:block bg-gradient-to-b from-[#EC6A87] to-[#D60DE8] w-[40%] rounded-3xl relative">
//           <h1 className="px-12 max-w-[20rem] mt-24 text-black font-700">
//             Find hundreds of services online and post your own content too.
//           </h1>
//           <div className="absolute hidden top-[14rem] lg:left-[-3rem] xlg:left-[-5rem] large:left-[-8rem] large:top-[12rem] lg:block">
//             <img src={signup} alt="" className="w-[300px] large:w-[330px] " />
//           </div>
//         </div>
//       </div>
//       {/* end of sign-up-center  */}
//     </section>
//     // end of sign-up
//   );
// };

// export default Login;
import { useState } from "react";
import or from "../../assests/images/or.png";
import google from "../../assests/images/icon_google.png";
import signup from "../../assests/images/signup-image.png";
import { Link } from "react-router-dom";
import { MdNightlight } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";

const Login = () => {
  const [selected, setSelected] = useState(false);
  const [toggleLight, setToggleLight] = useState(true);
  const toggleBtn = () => {
    setToggleLight(!toggleLight);
  };
  return (
    // sign-up
    <section className="bg-purple h-screen w-[100%]">
      {/* sign-up-center  */}
      <div
        className={
          toggleLight
            ? `inset bg-white w-[80%] lg:max-w-[800px] flex justify-between rounded-3xl max-w-5xl  `
            : `inset bg-black w-[80%] lg:max-w-[800px] flex justify-between rounded-3xl max-w-5xl`
        }
      >
        {/* sign-up-field  */}
        <div className="px-8">
          {/* back  */}
          <article className="flex justify-between pt-3">
            <Link to={"/"}>
              <button>
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

          {/* form-field */}
          <article className="mt-[0rem] px-4">
            {/* create-account  */}
            <div>
              <h3
                className={
                  toggleLight
                    ? "text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] font-500"
                    : "text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] font-500 text-white"
                }
              >
                Hello Again!
              </h3>
              <p className={toggleLight ? "" : "text-white"}>welcome back</p>
            </div>
            {/* form  */}
            <div className="mt-4">
              <form>
                {/* Email-Address  */}
                <div className="flex flex-col mt-8">
                  <label
                    htmlFor="email"
                    className={toggleLight ? " " : "text-white"}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    spellCheck={false}
                    className={
                      toggleLight
                        ? "border border-black border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-2"
                        : " text-white bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-2 "
                    }
                    placeholder="example@gmail.com"
                  />
                </div>
                {/*Password*/}
                <div className="flex flex-col mt-5">
                  <label
                    htmlFor="password"
                    className={toggleLight ? " " : "text-white"}
                  >
                    Password
                  </label>
                  <input
                    type=""
                    spellCheck={false}
                    className={
                      toggleLight
                        ? "border border-black border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-2"
                        : " text-white bg-transparent  border border-white border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-2 "
                    }
                    placeholder="Enter password"
                  />
                </div>
              </form>
            </div>
          </article>
          {/* end of form-field  */}

          {/* sign-up btn  */}
          <article className="mt-2 pb-7">
            <Link to={"/layout"}>
              <button className="bg-purple text-white w-[100%] sms:max-w-[360px] ml-3 mt-4 rounded-md ">
                <p className="py-3 smax:text-[1.25rem] ">Login</p>
              </button>
            </Link>
            <img
              src={or}
              alt=""
              className="ml-3 sms:max-w-[360px] text-white colorize-img3"
            />
            <button className="bg-white text-dark w-[100%] sms:max-w-[360px] ml-3 mt-0 rounded-full border border-black flex items-center ">
              <img src={google} alt="" className="px-3 " />
              <p className="py-3 smax:text-[1.25rem] mx-auto ">
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
          <div className="absolute hidden top-[12.7rem] lg:left-[-4rem] xlg:left-[-4rem] large:left-[-3rem] large:top-[12rem] lg:block">
            <img src={signup} alt="" className="w-[270px] large:w-[290px] " />
          </div>
        </div>
      </div>
      {/* end of sign-up-center  */}
    </section>
    // end of sign-up
  );
};

export default Login;
