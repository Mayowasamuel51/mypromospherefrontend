import { Outlet, Navigate } from "react-router-dom"
import DashBoardNav from "../../components/DashBoardNav";
import { useStateContext } from "../../contexts/ContextProvider";


const DashBoardLayout = () => {
  const {token} = useStateContext()
  return (
    <>
      <DashBoardNav />
      <Outlet/>
    </>
  )
}

export default DashBoardLayout