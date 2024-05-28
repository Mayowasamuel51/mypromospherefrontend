import { Outlet, Navigate } from "react-router-dom"
import DashBoardNav from "../../components/DashBoardNav";
import { useStateContext } from "../../contexts/ContextProvider";


const DashBoardLayout = () => {
  const {token} = useStateContext()
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