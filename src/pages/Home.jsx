// sections
import { Link } from "react-router-dom";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import TalentAndValues from "./sections/TalentAndValues";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <Mission />
      <TalentAndValues />
      <section className=" px-8 py-16 lg:px-16 lg:py-20">
        <h3 className=" text-2xl font-medium">Browse talent by Category</h3>
        <p className=" text-sm">Looking for a service provider? <Link className=" text-purple">Browse talents</Link></p>
      </section>
    </main>
  );
}
