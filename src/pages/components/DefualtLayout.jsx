import { Link, Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
import { useEffect } from "react"
import axiosclinet from "../../https/axios-clinet"
import LOGO from "../../assests/SVGs/logo.svg";
import Navbar from "../../components/Navbar";

function DefualtLayout() {
    const { user, token, setUser, setToken } = useStateContext()
    if (!token) {
        return <Navigate to="/" />
    }

    const onLogout = (ev) => {
        // ev.preventDefault()
        // axiosclinet.post("/api/logout").then(() => {
        //     setUser({})
        //     setToken(null)
        // })
    }

    useEffect(() => {
        axiosclinet.get("api/getuser").then(({ data }) => {
            console.log('see messages')
            console.log(data.message)
            setUser(data.message)
        })
    }, [])
    return (
        <>
            {true ? 
            <header className="py-2 px-4 lg:px-10 flex items-center justify-between bg-[#3D217A]">
                <div className="flex items-center gap-2">
                    <img src={LOGO} alt="" className="w-10 md:w-16 exl:w-20" />
                    <h1 className="text-sm font-bold text-black md:text-lg exl:text-xl">MyPromoSphere</h1>
                </div>
                <div className="flex items-center gap-3">
                    <nav className="nav flex items-center gap-5">
                        <Link className="nav-link" to="dashboard/UserProfile">Profile</Link>
                        <Link className="nav-link" to="dashboard/UserProfile/EditProfile">EditProfile</Link>
                        {/* <Link className="nav-link" to="dashboard/UserProfile/post">post something</Link> */}
                        <Link className="nav-link" to="/dashboard/post">post something</Link>
                        <Link className="nav-link" to="/dashboard/video">Video something</Link>
                        {/* <Link className="nav-link" to="/videos">videos</Link> */}
                        {/* <Link className="nav-link" to="/views">views</Link> */}
                    </nav>
                    <div >
                        {/* <h1> {user.name}  {user.email} {user.avatar }</h1> */}
                        <button>  <a className="bg-pink py-2 px-5 rounded-lg text-black font-['Poppins'] text-base font-medium" onClick={onLogout}>logout</a></button>
                    </div>
                
                </div>
            </header>
            :
            <Navbar profile={true} />
            }
            <main className="py-5">
                <Outlet />
            </main>
        </>
    )
}

export default DefualtLayout