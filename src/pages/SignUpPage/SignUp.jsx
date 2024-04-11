import { useEffect, useState } from 'react'
import or from "../../assests/images/or.png";
import google from "../../assests/images/icon_google.png";
import { Link, useNavigate } from "react-router-dom";
import signup from "../../assests/images/signup-image.png";
import { MdNightlight } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useMutation } from '@tanstack/react-query';
import { useForm } from "react-hook-form"
import axiosclinet from '../../https/axios-clinet';
import { useStateContext } from '../../contexts/ContextProvider';

import axios from "axios"

const SignUp = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const { setUser, setToken } = useStateContext()
  const [selected, setSelected] = useState(false);
  const [toggleLight, setToggleLight] = useState(true);
  const toggleBtn = () => {
    setToggleLight(!toggleLight);
  };
  const [loginUrl, setLoginUrl] = useState(null);

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    password_confirmation: yup.string().required(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const formSubmit = async (data) => {
    const payload = {
      name: data.name,
      password: data.password,
      password_confirmation: data.password_confirmation,
      email: data.email
    }
    console.log(payload)
    const response = await axios.post("https://apimypromospheretest.com.ng/api/sighup", payload, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
    if (response.status === 200) {
      setUser(response.data.users)
      console.log(response)
      setToken(response.data.token)
      navigate("/dashboard")
    }
    // axiosclinet.post('/api/register', payload, {
    //   headers: {
    //     Accept: "application/vnd.api+json",
    //   }
    // }).then((res) => {
    //   // setUser(res.data.users)
    //   // setToken(res.data.token)
    //   navigate("/login")
    // }).catch(err => {
    //   console.log(payload)
    //   console.log(err.message)
    //   const response = err.response;
    //   console.log(response)
    //   if (response && response.status === 422) {
    //     // response.data.errors
    //     console.log(response.data.errors)
    //     setError(response.data.errors)
    //   }
    // })
  }
  // useEffect(() => {
  //   fetch('http://localhost:8000/api/auth', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   }).then((response) => {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     throw new Error('Something went wrong!');
  //   })
  //     .then((data) => setLoginUrl(data.url))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <section className="newhero min-h-screen flex justify-center items-center">
      <div
        className={toggleLight ? "inset bg-white rounded-3xl flex w-[90%] lg:w-[60%]" : "inset bg-black rounded-3xl flex w-[90%] lg:w-[60%]"
        }
      >
        {/* sign-up center  */}
        <div className='flex-[4] py-4 px-4 lg:px-8'>
          {/* back  */}
          <article className="flex items-center justify-between">
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
          {/* create-account  */}
          <article className="">
            <h3
              className={
                toggleLight
                  ? "font-500 text-[1.1rem] sm:text-[1.3rem]"
                  : "font-500 text-[1.1rem] sm:text-[1.3rem] text-white"
              }
            >
              Create{" "}
              <span className="font-500 text-[1.1rem] sm:text-[1.3rem] text-blue">
                Account
              </span>
            </h3>
            <p className={toggleLight ? "" : "text-white"}>
              Already have an account? <Link className="text-red" to="/login">Login</Link>{" "}
            </p>
          </article>
          {/* form-field  */}
          <article className="">
            {error && <div className="text-danger">{
              Object.keys(error).map(key => (
                <p className='text-red' key={key}>{error[key][0]}</p>
              ))
            }</div>}
            {/* form  */}
            <form onSubmit={handleSubmit(formSubmit)} className='text-sm md:text-lg'>
              {/* name-input  */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className={toggleLight ? "" : "text-white"}
                >
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className={
                    toggleLight
                      ? "w-full border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : "w-full bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none text-white mt-1"
                  }
                  placeholder="Full name"
                />
                <p className="text-red pt-2" >{errors.name?.message}</p>


              </div>
              {/* email  */}
              <div className="flex flex-col mt-1">
                <label
                  htmlFor="name"
                  className={toggleLight ? "" : "text-white"}
                >
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  className={
                    toggleLight
                      ? "w-full border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : "w-full bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1"
                  }
                  placeholder="example@gmail.com"
                />
                <p className="text-red pt-2" >{errors.email?.message}</p>

              </div>
              {/* password  */}
              <div className="flex flex-col mt-1">
                <label
                  htmlFor="name"
                  className={toggleLight ? "" : "text-white"}
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type="text"
                  className={
                    toggleLight
                      ? "w-full border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : " bg-transparent w-full border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1 "
                  }
                  placeholder="Enter password"
                />
                <p className="text-red pt-2" >{errors.password?.message}</p>

              </div>

              {/* password confirm */}
              <div className="flex flex-col mt-1">
                <label
                  htmlFor="name"
                  className={toggleLight ? "" : "text-white"}
                >
                  Password confrimation
                </label>
                <input
                  {...register("password_confirmation", { required: true })}
                  type="text"
                  className={
                    toggleLight
                      ? "w-full border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : " bg-transparent w-full border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1 "
                  }
                  placeholder="Enter password"
                />
                <p className="text-red pt-2" >{errors.password_confirmation?.message}</p>
              </div>
              {/*agreement*/}
              <article className="flex sm:flex-row items-center gap-[1rem]">
                {/* toggle  */}
                <div
                  className="xs:order-2 bg-grey border relative xs:mt-0  sm:mt-2 w-[2.6rem] xxs:w-16 h-6 md:w-[2.6rem] max-w-[40px] rounded-full cursor-pointer"
                  onClick={() => setSelected(!selected)}
                >
                  <span
                    className={
                      selected
                        ? "w-2/5 h-4/5 bg-white absolute rounded-full left-[.2rem] top-[.15rem] transition-all duration-500"
                        : "w-2/5 h-4/5 bg-white absolute rounded-full left-[-.1rem] xsm:left-[.0rem] 380:left-[-.1rem] xs:top-[.12rem] xs:left-[.0rem] ml-5 smd:top-[.15rem]  transition-all duration-500"
                    }
                  ></span>
                </div>
                {/* text  */}
                <div className="sm:order-2">
                  <p
                    className={
                      toggleLight
                        ? "mt-1 max-w-[20rem] text-sm md:text-lg"
                        : "text-white mt-1  max-w-[20rem] text-sm md:text-lg"
                    }
                  >
                    I agree to the{" "}
                    <span className="text-blue"> Platforms Terms </span>of
                    service and
                    <span className="text-blue"> privacy policy </span>
                  </p>
                </div>
              </article>
              {/* sign-up btn  */}
              <article className="mt-4 pb-3">

                <button type='submit' className="bg-purple py-[.43rem] text-white w-full rounded-md ">
                  <p className="smax:text-[1.25rem] ">Sign up</p>
                </button>

                <img
                  src={or}
                  alt=""
                  className="w-full text-white colorize-img3"
                />
                <button className="bg-white py-[.4rem] text-dark w-full rounded-full border border-black flex items-center">
                  <img src={google} alt="" className="px-3 " />
                  <p className="text-[.8rem] sm:text-[1.125rem] smax:text[1.23rem] mx-auto">
                    {/* {loginUrl != null && ( */}
                    <a href={loginUrl}>Continue with Google</a>
                    {/* )} */}
                  </p>
                </button>
              </article>
            </form>

            {/* end of form  */}
          </article>
        </div>

        {/* side  */}
        <div className="flex-[3] hidden smax:block bg-gradient-to-b from-[#EC6A87] to-[#D60DE8] rounded-3xl relative">
          <h1 className="px-12 max-w-[20rem] smax:mt-[4rem] lg:mt-22 md:mt-12 text-black font-700">
            Find hundreds of services online and post your own content too.
          </h1>
          <div className="absolute hidden md:top-[10rem] smax:left-[-2rem] smax:top-[11rem] md:left-[-3rem] lg:left-[-3rem] xlg:left-[-3rem] large:left-[-2rem] large:top-[9.5rem] smax:block">
            <img
              src={signup}
              alt=""
              className=" smax:w-[250px] md:w-[280px] large:w-[299px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;


// import { useState } from "react";
// import signup from "../../assests/images/signup-image.png";
// import { Link } from "react-router-dom";

// const SignUp = () => {
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
//               <button className="bg-purple text-white w-full sms:max-w-[360px] ml-3 rounded-md ">
//                 <p className="py-2 smax:text-[1.25rem] ">Sign up</p>
//               </button>
//             </Link>
//             <img
//               src={or}
//               alt=""
//               className="ml-3 w-full sms:max-w-[360px] text-white colorize-img3"
//             />
//             <button className="bg-white text-dark w-full sms:max-w-[360px] ml-3 rounded-full border border-black flex items-center ">
//               <img src={google} alt="" className="px-3 " />
//               <p className="py-2 smax:text-[1.25rem] mx-auto ">
//                 Continue with Google
//               </p>
//           </button>
//          </article>
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
//         </div>
//       {/*end of sign-up-center*/}
//     </section>
//     // end of sign-up
//   );
// };

// export default SignUp;
