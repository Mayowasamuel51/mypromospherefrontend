import { Outlet } from "react-router-dom"
import DashBoardNav from "../../components/DashBoardNav";


const DashBoardLayout = () => {
  return (
    <>
      <DashBoardNav />
      <div className="py-10 md:py-8 border-2">
        <Outlet/>
      </div>
    </>
  )
}

export default DashBoardLayout