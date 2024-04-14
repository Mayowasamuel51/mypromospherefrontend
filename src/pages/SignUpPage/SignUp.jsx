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
// import axiosclinet from '../../https/axios-clinet';
import { useStateContext } from '../../contexts/ContextProvider';
import { Toaster, toast } from 'sonner';

import axios from "axios"

const api = import.meta.env.VITE_API_SIGHUP

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
  const [loading, setLoading] = useState(false)

  const schema = yup.object().shape({
    name: yup.string().required("Your name is required to continue"),
    email: yup.string().email("Invalid email address").required(),
    password: yup.string().min(6, "Password must be at least 6 characters").required(),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })
  if (errors.name){
    toast.error(errors.name?.message, {
      duration : 3000
  })
  }
  if (errors.email){
    toast.error(errors.email?.message, {
        duration : 3000
    })
  }
  if (errors.password){
    toast.error(errors.password?.message, {
      duration : 3000
  })
  }
  if (errors.password_confirmation){
    toast.error(errors.password_confirmation?.message, {
      duration : 3000
  })
  }
  const formSubmit = async (data) => {
    const payload = {
      "name": data.name,
      "email": data.email,
      "password": data.password,
    }
    console.log(payload)
    const response = await axios.post(api, payload)
    if (!selected) {
      toast.error("Agree to the terms and conditions")
      return;
    }
    console.log(response)
    if (response.status === 201) {
      setUser(response.data.users)
      console.log(response)
      setToken(response.data.token)
      navigate("/login")
    }
    
  }


  return (
    <section className="newhero min-h-screen flex justify-center items-center">
      <Toaster position="top-center" />
      <div
        className={toggleLight ? "inset bg-white rounded-3xl flex w-[95%] lg:w-[60%]" : "inset bg-black rounded-3xl flex w-[95%] lg:w-[60%]"
        }
      >
        {/* sign-up center  */}
        <div className='flex-[4] py-2 px-4 lg:px-8'>
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
                  ? "font-500 text-base sm:text-[1.3rem]"
                  : "font-500 text-base sm:text-[1.3rem] text-white"
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
            <form onSubmit={handleSubmit(formSubmit)} className='text-sm md:text-base'>
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
                {/* <p className="text-red pt-2" >{errors.name?.message}</p> */}
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
                {/* <p className="text-red pt-2" >{errors.email?.message}</p> */}
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
                  type="password"
                  className={
                    toggleLight
                      ? "w-full border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : " bg-transparent w-full border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1 "
                  }
                  placeholder="Enter password"
                />
                {/* <p className="text-red pt-2" >{errors.password?.message}</p> */}
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
                  type="password"
                  className={
                    toggleLight
                      ? "w-full border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : " bg-transparent w-full border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1 "
                  }
                  placeholder="Enter password"
                />
                {/* <p className="text-red pt-2" >{errors.password_confirmation?.message}</p> */}
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
                        ? "mt-1 max-w-[20rem] text-sm md:text-base"
                        : "text-white mt-1  max-w-[20rem] text-sm md:text-base"
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

                <button type='submit' className="bg-purple py-4 text-white w-full rounded-md ">
                 {loading ? 
                 <p className="smax:text-[1.2rem] flex items-center justify-center">
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-md"></span>
                  </p>
                  :
                  <p className="smax:text-[1.4rem]">SignUp</p>
                  }
                </button>
                <img
                  src={or}
                  alt=""
                  className="w-full text-white colorize-img3"
                />
                <div className="bg-white py-[.4rem] text-dark w-full rounded-full border border-black flex items-center">
                  <img src={google} alt="" className="px-3 " />
                  <p className="text-[.8rem] sm:text-[1.125rem] smax:text[1.23rem] mx-auto">
                    {/* {loginUrl != null && ( */}
                      <a href={loginUrl}>Continue with Google</a>
                    {/* )} */}
                  </p>
                </div>
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
          <div className="absolute hidden md:top-[10rem] smax:left-[-2rem] smax:top-[11rem] md:left-[-1rem] lg:left-[-2rem] xlg:left-[-1.3rem] large:left-[-1rem] large:top-[9.5rem] smax:block">
            <img
              src={signup}
              alt=""
              className=" smax:w-[200px] md:w-[250px] large:w-[209px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;


