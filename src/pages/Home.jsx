// sections
import TalentAndValues from "./sections/TalentAndValues";
import Categories from "./sections/Categories";
import Grow from "./sections/Grow";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Services from "./sections/Services";
import ServiceProviders from "./sections/ServiceProviders";
import NewHero from "./sections/NewHero";
import SkillsNav from "./sections/SkillsNav";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <main className=" ">
      <NewHero/>
      <Services/>
      <TalentAndValues />
      <Categories />
      <Grow />
      <SkillsNav />
      <Outlet />
      {/* <ServiceProviders/> */}
      <Testimonials />
      <CTA />
    </main>
  );
}
