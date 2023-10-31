// react-router imports
import { Outlet } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import { Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import { useStateContext } from "./contexts/ContextProvider";
export default function App() {
  // const {  token } = useStateContext();
  //   if (token) {
  //       return <Navigate to="/"/>
  //   }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
