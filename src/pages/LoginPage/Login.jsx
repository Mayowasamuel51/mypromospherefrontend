import { useState, useEffect } from "react";
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
import Loader from "../../loader";
const api = import.meta.env.VITE_API_LOGIN;
const api_server_auth = import.meta.env.VITE_SERVER_AUTH;
const Login = () => {
  const navigate = useNavigate()
  const [toggleLight, setToggleLight] = useState(true);
  const { setToken, setUser } = useStateContext()
  const [loading, setLoading] = useState(false)

  const toggleBtn = () => {
    setToggleLight(!toggleLight);
  };

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email address").required(),
    password: yup.string().required(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })
  if (errors.email) {
    toast.error(errors.email?.message, {
      duration: 3000
    })
  }
  if (errors.password) {
    toast.error(errors.password?.message, {
      duration: 3000
    })
  }
  const formSubmit = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    }
    try {
      setLoading(true)
      const response = await axios.post(api, payload)
      if (response.status === 200) {
        console.log(response.data)
        setToken(response.data)
        setUser(response.data)
        localStorage.setItem("user-details", JSON.stringify(response.data))
        navigate("/")
        toast.success("successfully Logged In")
        setLoading(false)
      }
    } catch (error) {
      if (error?.response?.status === 422) {
        toast.error(error?.response.data.message)
        setLoading(false)
        return
      }
      if (error?.message === "Network Error") {
        toast.error(`${error?.message} please check your internet connectivity`)
        setLoading(false)
      }
      console.log(error)
    }
  }
  const [loginUrl, setLoginUrl] = useState(null);

  useEffect(() => {
    fetch(api_server_auth, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong!');
      })
      .then((data) => {
        // setToken(data.data)
        // setUser(data.data)
        setLoginUrl(data.url)
        // navigate("/dashboard")
        console.log(data)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="relative bg-purple h-screen">
      {loading &&
        <div className="z-[999999999999999] fixed inset-0 bg-black bg-opacity-60">
          <Loader />
        </div>
      }
      {/* sign-up box  */}
      <div
        className={
          toggleLight
            ? "inset bg-white w-[90%] max-w-2xl md:rounded-3xl rounded-sm px-4 lg:px-8 flex justify-between"
            : "inset bg-black w-[90%] max-w-2xl md:rounded-3xl rounded-sm px-4 lg:px-8 flex justify-between"
        }
      >
        <div>
          {/* back  */}
          <article className="xs:mt-4 flex items-center justify-between">
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
          <article className="">
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
          <article className="my-5">
            {/* form  */}
            <form onSubmit={handleSubmit(formSubmit)}>
              {/* email  */}
              <div className="flex flex-col my-3">
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
                      ? "w-[90%] border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1 h-7"
                      : "w-[90%] bg-transparent border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1 h-7"
                  }
                  placeholder="example@gmail.com"
                />

              </div>
              {/* password  */}
              <div className="flex flex-col my-3">
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
                      ? "w-[90%] border border-black border-t-0 border-r-0 border-l-0 focus:outline-none max-w-[370px] mt-1 h-7"
                      : " bg-transparent w-[90%] border border-white border-t-0 border-r-0 border-l-0 max-w-[370px] focus:outline-none text-white mt-1 h-7"
                  }
                  placeholder="Enter password"
                />
              </div>
              {/* sign-up btn  */}
              <article className="my-2">

                <button type="submit" className="bg-purple h-10 text-white w-full rounded-md text-base smax:text-2xl">
                  {loading ?
                    <p className="smax:text-[1.2rem] flex items-center justify-center">
                      <span className="loading loading-ring loading-md"></span>
                      <span className="loading loading-ring loading-md"></span>
                      <span className="loading loading-ring loading-md"></span>
                    </p>
                    :
                    <p className="text-base smax:text-2xl">Login</p>
                  }
                </button>

                <img
                  src={or}
                  alt=""
                  className="ml-3 w-[90%] sms:max-w-[360px] text-white colorize-img3"
                />
                {/* <button className="bg-white py-[.4rem] text-dark w-full rounded-full border border-black flex items-center">
                  <img src={google} alt="" className="px-3 " />
                  {loginUrl != null && (
                    <a className="text-[.8rem] sm:text-[1.125rem] smax:text[1.23rem] mx-auto " href={loginUrl}>Continue with Google</a>
                  )}
                </button> */}

                <p className={toggleLight ? "my-4" : "my-4 text-white"}>
                  Don&apos;t have an account? <Link className="text-red" to="/signup">Signup</Link>{" "}
                </p>
              </article>
            </form>
            <button className="bg-white py-[.4rem] text-dark w-full rounded-full border border-black flex items-center">
                  <img src={google} alt="" className="px-3 " />
                  {loginUrl != null && (
                    <a className="text-[.8rem] sm:text-[1.125rem] smax:text[1.23rem] mx-auto " href={loginUrl}>Continue with Google</a>
                  )}
                </button>
            {/* end of form  */}
          </article>
        </div>

        {/* side  */}
        <div className="hidden smax:block bg-gradient-to-b from-[#EC6A87] to-[#D60DE8] relative right-[-2rem] rounded-tr-3xl rounded-br-3xl">
          <h1 className="px-12 max-w-[20rem] smax:mt-[4rem] lg:mt-22 md:mt-12 text-black font-700">
            Find hundreds of services online and post your own content too.
          </h1>
          <div className="absolute hidden md:top-[10rem] smax:left-[-2rem] smax:top-[11rem] md:left-[-1rem] large:top-[9.5rem] smax:block">
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

