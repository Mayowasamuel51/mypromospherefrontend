import { useState } from 'react'
import or from "../../assests/images/or.png";
import google from "../../assests/images/icon_google.png";
import { Link, useNavigate } from "react-router-dom";
import signup from "../../assests/images/signup-image.png";
import { MdNightlight } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form";
import Loader from '../../loader';
import { useStateContext } from '../../contexts/ContextProvider';
import { Toaster, toast } from 'sonner';

import axios from "axios"

const api = import.meta.env.VITE_API_SIGNUP

const SignUp = () => {
  const navigate = useNavigate()
  const { setToken } = useStateContext()
  const [selected, setSelected] = useState(false);
  const [toggleLight, setToggleLight] = useState(true);
  const toggleBtn = () => {
    setToggleLight(!toggleLight);
  };

  const toggler = (e)=> {
    const {checked} = e.target
    setSelected(checked)
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
    if (!selected) {
      toast.error("Agree to the terms and conditions")
      setLoading(false)
      return;
    }
    setLoading(true)
    try {
      const response = await axios.post(api, payload)
      if (response.status === 200) {
        setToken(response.data.token)
        setLoading(false)
        toast.success("You have Successfull created an account")
        navigate("/login")
      }
    } catch(error) {
      setLoading(false)
      toast.error("Error")
    }
  }
  return (
    <section className="relative newhero min-h-screen flex justify-center items-center">
      {loading && 
        <div className="z-[999999999999999] fixed inset-0 bg-black bg-opacity-60">
          <Loader/>
        </div>
      }
      <Toaster position="top-center" />
      <div
        className={toggleLight ? "overflow-hidden inset bg-white rounded-md lg:rounded-3xl flex w-[95%] lg:w-[60%]" : "overflow-hidden inset bg-black rounded-md lg:rounded-3xl flex w-[95%] lg:w-[60%]"
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
                      ? "dark:bg-transparent valid:bg-transparent autofill:bg-transparent w-full border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : "dark:bg-transparent valid:bg-transparent autofill:bg-transparent w-full bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[330px] focus:outline-none text-white mt-1"
                  }
                  placeholder="Full name"
                />
              </div>
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
                      ? "dark:bg-transparent valid:bg-transparent autofill:bg-transparent w-full border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : "dark:bg-transparent valid:bg-transparent autofill:bg-transparent w-full bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1"
                  }
                  placeholder="example@gmail.com"
                />
              </div>
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
                      ? "dark:bg-transparent valid:bg-transparent autofill:bg-transparent w-full border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : "dark:bg-transparent valid:bg-transparent autofill:bg-transparent  bg-transparent w-full border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1 "
                  }
                  placeholder="Enter password"
                />
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
                      ? "dark:bg-transparent valid:bg-transparent autofill:bg-transparent w-full border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : "dark:bg-transparent valid:bg-transparent autofill:bg-transparent  bg-transparent w-full border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1 "
                  }
                  placeholder="Enter password"
                />
                {/* <p className="text-red pt-2" >{errors.password_confirmation?.message}</p> */}
              </div>
              {/*agreement*/}
              <article className="flex sm:flex-row items-center gap-[1rem]">
                {/* toggle  */}
                
                <label className="toggle-switch">
                  <input type="checkbox" onChange={toggler} />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle"></div>
                  </div>
                </label>
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

                <button type='submit' className="bg-purple h-12 py-4 text-white w-full rounded-md flex justify-center items-center">
                 {loading ? 
                 <p className="smax:text-[1.2rem] flex items-center justify-center">
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-md"></span>
                  </p>
                  :
                  <p className="text-base smax:text-2xl">SignUp</p>
                  }
                </button>
                <img
                  src={or}
                  alt=""
                  className="w-full text-white colorize-img3"
                />
                <div className="bg-white py-[.4rem] text-dark w-full rounded-full border border-black flex items-center">
                  <img src={google} alt="" className="px-3" />
                  <p className="text-[.8rem] sm:text-[1.125rem] smax:text[1.23rem] mx-auto">
                    <a href={loginUrl}>Continue with Google</a>
                  </p>
                </div>
                {/* <p className={toggleLight ? "my-2" : "my-2 text-white"}>
                  You already have an account? <Link className="text-red" to="/login">Login</Link>{" "}
                </p> */}
              </article>
            </form>
            {/* end of form  */}
          </article>
        </div>

        {/* side  */}
        <div className="flex-[3] hidden smax:block bg-gradient-to-b from-[#EC6A87] to-[#D60DE8] relative">
          <h1 className="px-12 max-w-[20rem] smax:mt-[4rem] lg:mt-22 md:mt-12 text-black font-700">
            Find hundreds of services online and post your own content too.
          </h1>
          <div className="absolute hidden md:top-[10rem] smax:left-[-2rem] smax:top-[11rem] md:left-[-1rem] lg:left-[-2rem] xlg:left-[-1.3rem] large:left-[-1rem] large:top-[9.5rem] smax:block">
            <img
              src={signup}
              alt=""
              className=" smax:w-[200px] md:w-[250px] large:w-[249px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;


