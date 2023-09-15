import { useState } from "react";
import or from "../../assests/images/or.png";
import google from "../../assests/images/icon_google.png";
import signup from "../../assests/images/signup-image.png";
import { Link } from "react-router-dom";
import { MdNightlight } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";

const SignUp = () => {
  return <h1>hello</h1>
}
export default SignUp;


//   const [selected, setSelected] = useState(false);
//   const [toggleLight, setToggleLight] = useState(true);
//   const toggleBtn = () => {
//     setToggleLight(!toggleLight);
//   };
//   return (
//     // sign-up
//     <section className="bg-purple h-screen w-[100%]">
//       {/* sign-up-center  */}
//       <div
//         className={
//           toggleLight
//             ? `inset bg-white  w-[85%] lg:max-w-[800px]  flex justify-between rounded-3xl max-w-5xl`
//             : `inset bg-black  w-[80%] lg:max-w-[800px] flex justify-between rounded-3xl max-w-5xl`
//         }
//       >
//         {/* sign-up-field  */}
//         <div className="xs:px-4 smd:px-12 pt-2 ">
//           {/* back  */}
//           <article className="flex justify-between">
//             <Link to={"/"}>
//               <button className="px-2">
//                 <p className={toggleLight ? "" : "text-white"}>Bac</p>
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
//           <article className="px-4">
//             {/* create-account  */}
//             <div>
//               <h3
//                 className={
//                   toggleLight
//                     ? "text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] font-500"
//                     : "text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] font-500 text-white"
//                 }
//               >
//                 Create{" "}
//                 <span className="text-blue text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] font-500 ">
//                   Account
//                 </span>
//               </h3>
//               <p className={toggleLight ? "" : "text-white"}>
//                 Already have an account? <span className="text-red">Login</span>
//               </p>
//             </div>
//             {/* form  */}
//             <div className="mt-2">
//               <form>
//                 {/* Name-input  */}
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="name"
//                     className={toggleLight ? " " : "text-white"}
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     spellCheck={false}
//                     className={
//                       toggleLight
//                         ? "w-[100%] border border-black border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none"
//                         : " bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none text-white mt-1 "
//                     }
//                     placeholder="Full name"
//                   />
//                 </div>
//                 {/* Email-Address  */}
//                 <div className="flex flex-col mt-2 ">
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
//                         ? "border border-black border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none"
//                         : " text-white bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-1 "
//                     }
//                     placeholder="example@gmail.com"
//                   />
//                 </div>
//                 {/*Password*/}
//                 <div className="flex flex-col mt-2">
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
//                         ? "border border-black border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none "
//                         : " text-white bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none mt-1"
//                     }
//                     placeholder="Enter password"
//                   />
//                 </div>
//                 {/*agreement*/}
//                 <article className="flex xs:flex-col sm:flex-row items-center gap-[1rem]">
//                   {/* toggle  */}
//                   <div
//                     className="xs:order-2 bg-grey border relative xs:mt-0  sm:mt-4 w-[2.6rem] xxs:w-16 h-6 md:w-[2.6rem] max-w-[40px] rounded-full cursor-pointer"
//                     onClick={() => setSelected(!selected)}
//                   >
//                     <span
//                       className={
//                         selected
//                           ? "w-2/5 h-4/5 bg-white absolute rounded-full left-[.2rem] top-[.15rem] transition-all duration-500"
//                           : "w-2/5 h-4/5 bg-white absolute rounded-full left-[-.1rem] xsm:left-[.0rem] 380:left-[-.1rem] top-[.18rem] ml-5 smd:top-[.15rem]  transition-all duration-500"
//                       }
//                     ></span>
//                   </div>
//                   {/* text  */}
//                   <div className="sm:order-2">
//                     <p
//                       className={
//                         toggleLight
//                           ? "mt-2 max-w-[20rem]  "
//                           : "text-white mt-2  max-w-[20rem] "
//                       }
//                     >
//                       I agree to the{" "}
//                       <span className="text-blue"> Platforms Terms </span>of
//                       service and
//                       <span className="text-blue"> privacy policy </span>
//                     </p>
//                   </div>
//                 </article>
//               </form>
//             </div>
//           </article>
//           {/* end of form-field  */}

//           {/* sign-up btn  */}
//           <article className="mt-3 pb-3">
//             <Link to={"/layout"}>
//               <button className="bg-purple text-white w-[90%] sms:max-w-[360px] ml-3 rounded-md ">
//                 <p className="py-2 smax:text-[1.25rem] ">Sign up</p>
//               </button>
//             </Link>
//             <img
//               src={or}
//               alt=""
//               className="ml-3 w-[90%] sms:max-w-[360px] text-white colorize-img3"
//             />
//             <button className="bg-white text-dark w-[90%] sms:max-w-[360px] ml-3 rounded-full border border-black flex items-center ">
//               <img src={google} alt="" className="px-3 " />
//               <p className="py-2 smax:text-[1.25rem] mx-auto ">
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
//           <div className="absolute hidden top-[14rem] lg:left-[-4rem] xlg:left-[-4rem] large:left-[-3rem] large:top-[12rem] lg:block">
//             <img src={signup} alt="" className="w-[270px] large:w-[290px] " />
//           </div>
//         </div>
//       </div>
//       {/* end of sign-up-center  */}
//     </section>
//     // end of sign-up
//   );
// };
