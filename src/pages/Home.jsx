// sections
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import TalentAndValues from "./sections/TalentAndValues";
import Categories from "./sections/Categories";
import Grow from "./sections/Grow";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Services from "./sections/Services";
import ServiceProviders from "./sections/ServiceProviders";
import NewHero from "./sections/NewHero";
import { useStateContext } from "../contexts/ContextProvider";
import SkillsNav from "./sections/SkillsNav";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export default function Home() {
  // const {  token } = useStateContext();
  //   if (token) {
  //       return <Navigate to="dashboard"/>
  //   }
  const [myBackground, setMyBackground] = useState(true)

  useEffect(() => {
    alternateColor()
    
  }, [myBackground])

  function alternateColor(){
    const myInterval = setInterval(function(){
      if(myBackground){
        setMyBackground(false)
      }else if(!myBackground){
        setMyBackground(true)
      }
      clearInterval(myInterval)
    }, 6000)
  }

  return (
    <main className=" ">
      <div className={` text-white bg-[#6F0E78] transition-all delay-150 duration-150`} style={{background: myBackground ? 'linear-gradient(90deg, #EC6A87 16.29%, #D815DF 85.71%)' : '#6F0E78'}}>
        <NewHero/>
      </div>
      <Services/>
      <TalentAndValues />
      <Categories />
      <Grow />
      <SkillsNav />
      <Outlet />
      <ServiceProviders/>
      <Testimonials />
      <CTA /> {/* <Hero /> */}
    </main>
  );
}
