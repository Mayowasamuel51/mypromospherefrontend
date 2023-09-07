import { Link } from "react-router-dom";

// components
import CategoryContainer from "../components/CategoryContainer";
export default function Categories() {
  return (
    <section className=" px-8 py-16 bigLg:px-16 bigLg:py-20">
      <h3 className=" text-2xl font-medium">Browse talent by Category</h3>
      <p className=" text-sm mb-14">
        Looking for a service provider?{" "}
        <Link className=" text-purple">Browse talents</Link>
      </p>
      <CategoryContainer />
    </section>
  );
}
