import { Link } from "react-router-dom";

// components
import CategoryContainer from "../components/CategoryContainer";

export default function Categories() {
  return (
    <section className="flex flex-col px-4 py-16 md:items-start bigLg:px-10 bigLg:py-28 exl:items-center">
      <h3 className="text-center text-lg font-bold md:text-2xl mb-2">Browse talent by Category</h3>
      <p className="text-sm mb-14 text-center">
        Looking for a service provider?{" "}
        <Link to="/" className=" text-purple">Browse talents</Link>
      </p>
      <CategoryContainer />
    </section>
  );
}
