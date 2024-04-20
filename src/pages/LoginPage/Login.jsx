import { useState } from "react";
import or from "../../assests/images/or.png";
import google from "../../assests/images/icon_google.png";
import { Link, useNavigate } from "react-router-dom";
import signup from "../../assests/images/signup-image.png";
import { MdNightlight } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";
import { useStateContext } from "../../contexts/ContextProvider";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import axios from "axios";
import { toast } from 'sonner';
const api = import.meta.env.VITE_API_LOGIN;

const Login = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(false);
  const [toggleLight, setToggleLight] = useState(true);
  const { setUser, setToken } = useStateContext()
  const [loading, setLoading] = useState(false)

  const toggleBtn = () => {
    setToggleLight(!toggleLight);
  };

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const formSubmit = async(data) => {
    const payload = {
      email: data.email,
      password: data.password,
    }
    try {
      setLoading(true)
      const response = await axios.post(api, payload)
      console.log(response)
      if (response.status === 200) {
        setUser(response?.data)
        setToken(response.data.token)
        // localStorage.setItem('ACCESS_TOKEN', response.data.token)
        localStorage.setItem("user-details", JSON.stringify(response.data))
        navigate("/dashboard")
        toast.success("successfully Logged In")
        setLoading(false)
      }

    } catch (error) {
      setLoading(false)
      toast.error(error?.response.data.message)
    }
    // navigate("/dashboard")
  }
  return (
    <section className="bg-purple h-screen">
      {/* sign-up box  */}
      <div
        className={
          toggleLight
            ? "inset bg-white w-[90%] max-w-2xl md:rounded-3xl rounded-sm px-4 lg:px-8 flex justify-between"
            : "inset bg-black w-[90%] max-w-2xl md:rounded-3xl rounded-sm px-4 lg:px-8 flex justify-between"
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
            <form onSubmit={handleSubmit(formSubmit)}>
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
                      ? "w-[90%] border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : "w-[90%] bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1"
                  }
                  placeholder="example@gmail.com"
                />

                <p className="text-red pt-2" >{errors.email?.message}</p>
              </div>
              {/* password  */}
              <div className="flex flex-col">
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
                      ? "w-[90%] border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1"
                      : " bg-transparent w-[90%] border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1 "
                  }
                  placeholder="Enter password"
                />
                   <p className="text-red pt-2" >{errors.password?.message}</p>
              </div>
              {/* sign-up btn  */}
              <article className="my-2">

                <button type="submit" className="bg-purple h-12 text-white w-full rounded-md  ">
                {loading ? 
                 <p className="smax:text-[1.2rem] flex items-center justify-center">
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-md"></span>
                  </p>
                  :
                  <p className="smax:text-[1.4rem]">Login</p>
                }
                </button>

                <img
                  src={or}
                  alt=""
                  className="ml-3 w-[90%] sms:max-w-[360px] text-white colorize-img3"
                />
                <button className="bg-white py-[.4rem] text-dark w-full rounded-full border border-black flex items-center">
                  <img src={google} alt="" className="px-3 " />
                  <p className="text-[.8rem] sm:text-[1.125rem] smax:text[1.23rem] mx-auto ">
                    Continue with Google
                  </p>
                </button>

                <hr />

                <p className={toggleLight ? "my-2" : "my-2 text-white"}>
                  Don&apos;t have an account? <Link className="text-red" to="/signup">Signup</Link>{" "}
                </p>
              </article>
            </form>
            {/* end of form  */}
          </article>
        </div>

        {/* side  */}
        <div className="hidden smax:block bg-gradient-to-b from-[#EC6A87] to-[#D60DE8] relative right-[-2rem] rounded-3xl">
          <h1 className="px-12 max-w-[20rem] smax:mt-[4rem] lg:mt-22 md:mt-12 text-black font-700">
            Find hundreds of services online and post your own content too.
          </h1>
          <div className="absolute hidden md:top-[10rem] smax:left-[-2rem] smax:top-[11rem] md:left-[-2rem] large:top-[9.5rem] smax:block">
            <img
              src={signup}
              alt=""
              className=" smax:w-[220px] md:w-[270px] large:w-[280px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;

