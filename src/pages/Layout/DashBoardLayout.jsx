import { Outlet } from "react-router-dom"
import DashBoardNav from "../../components/DashBoardNav";


const DashBoardLayout = () => {
  return (
    <>
      <DashBoardNav />
      <div className="py-16 md:py-28">
        <Outlet/>
      </div>
    </>
  )
}

export default DashBoardLayout