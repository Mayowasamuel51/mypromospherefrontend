import { Link } from "react-router-dom";

// components
import CategoryContainer from "../components/CategoryContainer";
export default function Categories() {
  return (
    <section className=" flex flex-col items-center px-8 py-16 md:items-start bigLg:px-16 bigLg:py-28 exl:items-center">
      <h3 className=" text-lg font-medium md:text-2xl">Browse talent by Category</h3>
      <p className=" text-sm mb-14 text-center">
        Looking for a service provider?{" "}
        <Link className=" text-purple">Browse talents</Link>
      </p>
      <CategoryContainer />
    </section>
  );
}
