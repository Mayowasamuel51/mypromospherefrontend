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
  return (
    <main className=" ">
      <NewHero/>
      <Services/>
      <TalentAndValues />
      <Categories />
      <Grow />
      <SkillsNav />
      <Outlet />
      <ServiceProviders/>
      <Testimonials />
      <CTA />
    </main>
  );
}
