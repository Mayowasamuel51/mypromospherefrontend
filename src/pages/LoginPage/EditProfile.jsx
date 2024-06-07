import { Navigate, useLocation } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider";
import { Outlet, NavLink } from "react-router-dom"

const EditProfile = () => {
  const { token } = useStateContext()
  const { pathname } = useLocation()
  if (!token) return <Navigate to="/" />
  return (
    <section className="">
      <div className="flex lg:flex-row flex-col gap-4 md:gap-10 px-4 lg:px-10">
        <article className="flex flex-row lg:flex-col gap-20">
          <div className="border-b-2 border-black md:block hidden py-4">
            <img src={token?.profileImage} className="w-20 aspect-square rounded-full object-cover" alt="" />
            <div className='flex flex-col gap-2 my-2'>
              <p className='text-base font-medium capitalize'>{token && token["user-name"]}</p>
              <p className='text-xs text-slate-400'>{token.user}</p>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col gap-4">
            <div className="">
              <NavLink to="/dashboard/EditProfile" className={({ isActive }) => (isActive && pathname === "/dashboard/EditProfile") && "font-bold text-purple"}>
                <button>
                  <p>EditProfile</p>
                </button>
              </NavLink>
            </div>
            <div className="">
              <NavLink to="/dashboard/EditProfile/personal-Info" className={({ isActive }) => isActive && "font-bold text-purple"}>
                <button>
                  <p> Personal Information</p>
                </button>
              </NavLink>
            </div>
          </div>
        </article>

        <div className="flex-1">
          <div className="md:px-32">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditProfile