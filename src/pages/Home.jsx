// sections
import { Link } from "react-router-dom";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import TalentAndValues from "./sections/TalentAndValues";
import Categories from "./sections/Categories";
import Grow from "./sections/Grow";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <Mission />
      <TalentAndValues />
      <Categories />
      <Grow />
      <Testimonials />
      <CTA />
    </main>
  );
}
