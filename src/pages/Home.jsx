import TalentAndValues from "./sections/TalentAndValues";
import Categories from "./sections/Categories";
import Grow from "./sections/Grow";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Services from "./sections/Services";
import NewHero from "./sections/NewHero";
import { IoMdArrowUp } from "react-icons/io";
import { Helmet } from "react-helmet";

import { useStateContext } from "../contexts/ContextProvider";
export default function Home() {
  const { scrollValue, handleClick } = useStateContext();
  return (
    <main className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mypromosphere</title>
        <meta name="keywords" content="affordable prices, buy and sell, online shopping, product listings, digital marketplace, fast shipping" />
        <link rel="canonical" href="https://www.mypromosphere.com" />
        <meta
          name="description"
          content={
            " Mypromosphere is the leading online marketplace for effectively promoting your products and services. Discover high-quality, discounted goods from real sellers and enjoy unbeatable deals. Plus, you can upload your ads with images and videos for free, enhancing your reach and visibility."
          }
        />

        <meta
          property="og:description"
          content={
            "Mypromosphere is the leading online marketplace for effectively promoting your products and services. Discover high-quality, discounted goods from real sellers and enjoy unbeatable deals. Plus, you can upload your ads with images and videos for free, enhancing your reach and visibility. "
          }
        />
      </Helmet>
      <NewHero />
      <Services />
      <TalentAndValues />
      <Categories />
      <Grow />
      <Testimonials />
      <CTA />
      <div
        className={`${
          scrollValue > 2 ? "visible opacity-100" : "invisible opacity-0"
        } duration-300 grid place-items-center fixed bottom-10 right-10 w-[50px] aspect-square rounded-full border-2 border-white`}
        style={{
          background: `conic-gradient(#EC6A87 ${scrollValue}%, #3D217A ${scrollValue}%)`,
        }}
        onClick={handleClick}
      >
        <div className="grid place-items-center bg-white w-[40px] aspect-square rounded-full">
          <IoMdArrowUp size={30} color="#3D217A" />
        </div>
      </div>
    </main>
  );
}
