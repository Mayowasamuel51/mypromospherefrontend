import { Link } from "react-router-dom";
// assests
import logo from "../assests/images/logo black.png";
import {FashionLinks} from "../json/fashionLinks";
import {HotLinks}  from "../json/hotLinks";

export default function Footer() {
  const quickLinks = FashionLinks
  const categoriesLinks = HotLinks

  return (
    <footer className=" bg-pink pt-8 px-4 flex flex-col bigLg:px-16">
      <form
        action=""
        className=" flex flex-col lg:items-center lg:max-w-screen-lg lg:mx-auto"
      >
        <h1 className=" text-white font-['Inter'] text-2xl lg:text-5xl font-bold leading-normal">
          Subscribe to our newsletter
        </h1>
        <p className=" text-white font-['Roboto'] text-sm lg:text-center lg:text-xl lg:mt-2">
          Subscribe now to our newsletter to be updated on our latest deals and
          offers!!!
        </p>
        <div className=" flex flex-col md:items-end mt-10 md:flex-row lg:mt-16">
          <input
            type="email"
            placeholder="Type your email"
            className=" bg-transparent py-4 placeholder:text-white placeholder:text-lg border-b-purple border-2 border-t-0 border-x-0 focus:border-x-0 focus:border-t-0 focus:outline-none md:pr-40"
          />
          <button
            type="submit"
            className=" bg-purple mt-2 py-2 px-5 lg:py-4 lg:px-7 rounded-sm uppercase text-white font-['Inter'] lg:text-xl font-semibold leading-[30px]"
          >
            Subscribe
          </button>
        </div>
      </form>
      {/* container for different links */}
      <div className=" flex flex-col items-start gap-y-6 mt-16 md:flex-row md:justify-between">
        <div className=" flex flex-col">
          <p className=" text-white font-['Roboto'] font-medium lg:leading-8">
            Call us today at
          </p>
          <p className=" text-purple font-['Roboto'] font-medium lg:leading-8">
            +234-908-347-2391
          </p>
          <Link>
            <img src={logo} alt="logo" className=" w-16 " />
          </Link>
        </div>

        <div className=" flex flex-col gap-y-5">
          <h2 className=" text-white font-['Inter'] text-xl font-semibold lg:text-2xl">
            Fashion
          </h2>
          <ul className=" flex flex-col gap-y-2">
            {quickLinks.map(({ id, text, url }) => {
              return (
                <Link
                  to={url}
                  key={id}
                  className=" capitalize text-white/70 font-['Roboto'] font-medium "
                >
                  {text}
                </Link>
              );
            })}
          </ul>
        </div>

        <div className=" flex flex-col gap-y-5">
          <h2 className=" text-white font-['Inter'] text-xl font-semibold lg:text-2xl">
            Categories
          </h2>
          <ul className=" flex flex-col gap-y-2">
            {categoriesLinks.map(({ id, text, url }) => {
              return (
                <Link
                  to={url}
                  key={id}
                  className=" capitalize text-white/70 font-['Roboto'] font-medium "
                >
                  {text}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className=" text-white md:text-center my-4">
        Copyright @{new Date().getFullYear()} {" "}
        <span className=" tracking-[-1.8px]">MyPromoSphere</span>
      </div>
    </footer>
  );
}

