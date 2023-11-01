// sections
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import TalentAndValues from "./sections/TalentAndValues";
import Categories from "./sections/Categories";
import Grow from "./sections/Grow";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import ServiceProviders from "./sections/ServiceProviders";
import NewHero from "./sections/NewHero";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";
export default function Home() {
  // const {  token } = useStateContext();
  //   if (token) {
  //       return <Navigate to="dashboard"/>
  //   }
  return (
    <main className=" ">
     <NewHero/>
      <Services/>
      <ServiceProviders/>
      <TalentAndValues />
      <Categories />
      <Grow />
      <Skills />
      <Testimonials />
      <CTA /> {/* <Hero /> */}
      
    </main>
  );
}
