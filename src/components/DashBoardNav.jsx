import { useStateContext } from "../contexts/ContextProvider"
import { Link, Navigate } from "react-router-dom"
import LOGO from "../../src/assests/SVGs/logo.svg";

import Navbar from "./Navbar"

const DashBoardNav = () => {
    const { token, LogOut } = useStateContext()
    
    return (
        <>
            {token ?
                <header className="py-2 px-4 lg:px-10 flex items-center justify-between bg-[#3D217A]">
                    <Link to={"/"}>
                        <div className="flex items-center gap-1">
                            <img src={LOGO} alt="" className="w-10 md:w-16 exl:w-20" />
                            <h1 className="text-xs font-bold text-black md:text-lg exl:text-xl">MyPromoSphere</h1>
                        </div>
                    </Link>
                    <div className="flex items-center gap-3">
                        {/* <nav className="nav flex items-center gap-5">
                        <Link className="nav-link" to="dashboard/UserProfile">Profile</Link>
                        <Link className="nav-link" to="dashboard/UserProfile/EditProfile">EditProfile</Link>
                        <Link className="nav-link" to="dashboard/UserProfile/post">post something</Link>
                        <Link className="nav-link" to="/dashboard/post">post something</Link>
                        <Link className="nav-link" to="/videos">videos</Link>
                    </nav> */}
                        <div >
                            <button onClick={() => LogOut()}>  <a className="bg-pink py-1 px-2 md:py-2 md:px-5 rounded-md mg:rounded-lg text-black font-['Poppins'] text-base font-medium">logout</a></button>
                        </div>

                    </div>
                </header>
                :
                <Navbar profile={true} />
            }

        </>
    )
}

export default DashBoardNav