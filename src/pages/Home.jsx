// sections
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import TalentAndValues from "./sections/TalentAndValues";
import Categories from "./sections/Categories";
import Grow from "./sections/Grow";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <Mission />
      <TalentAndValues />
      <Categories />
      <Grow />
      <Skills />
      <Testimonials />
      <CTA />
    </main>
  );
}
