// react-router imports
import { Outlet } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import { Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import { useStateContext } from "./contexts/ContextProvider";
import Home from "./pages/Home";
 function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;