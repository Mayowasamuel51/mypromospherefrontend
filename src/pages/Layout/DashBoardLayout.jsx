import { NavLink, Link, Outlet, useLocation } from "react-router-dom"
import DashBoardNav from "../../components/DashBoardNav";
import DashBoard from "../components/DashBoard";
import Footer from "../../components/Footer";

const DashBoardLayout = () => {
  return (
    <>
        <DashBoardNav />
        <Outlet/>
        {/* <Footer /> */}
    </>
  )
}

export default DashBoardLayout