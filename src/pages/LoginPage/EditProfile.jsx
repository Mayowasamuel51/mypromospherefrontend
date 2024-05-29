import { useState } from 'react'
import PersonalInfo from './component/PersonalInfo';
import ProfileEdit from './component/ProfileEdit';
import { Navigate } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"

const EditProfile = () => {
  const { token } = useStateContext()
  const [toggle, setToggle] = useState(1);
  const updateToggle = (id) => {
    setToggle(id);
  };
  // if (!token) return <Navigate  to="/"/>
  return (
    // Edit-profile
    <section className="">
      <div className="flex gap-10 px-4 lg:px-10">
        <article className="flex flex-row lg:flex-col gap-4">
          <div className="">
            <button onClick={() => updateToggle(1)} className>
              <p className={toggle === 1 ? "font-700" : ""}>EditProfile</p>
            </button>
          </div>

          <div className="">
            <button
              onClick={() => updateToggle(2)}
              className={toggle === 2 ? "" : null}
            >
              <p className={toggle === 2 ? "font-700" : ""}> Personal Information</p>
            </button>
          </div>
          {/* single-tab  */}
          {/* <div className="">
            <button
              onClick={() => updateToggle(3)}
              className={toggle === 3 ? "" : null}
            >
              <p className={toggle === 3 ? "font-700" : ""}>Password</p>
            </button>
          </div>
          <div className="">
            <button
              onClick={() => updateToggle(4)}
              className={toggle === 4 ? "" : null}
            >
              <p className={toggle === 4 ? "font-700" : ""}>
                Email Notification
              </p>
            </button>
          </div>
          <div className="">
            <button
              onClick={() => updateToggle(5)}
              className={toggle === 5 ? "" : null}
            >
              <p className={toggle === 5 ? "font-700" : ""}>Privacy and data</p>
            </button>
          </div>
          <div className="">
            <button
              onClick={() => updateToggle(6)}
              className={toggle === 6 ? "" : null}
            >
              <p className={toggle === 6 ? "font-700" : ""}>
                Security and Logins
              </p>
            </button>
          </div> */}
        </article>
        {/* end of each edit  */}

        <div className="flex-1">
          <div>{toggle === 1 ? <ProfileEdit /> : null}</div>

          <div>{toggle === 2 ? <PersonalInfo /> : null}</div>

          <div>{toggle === 3 ? "tru" : null}</div>

          {/*Email Notification*/}
          <div>{toggle === 4 ? "true" : null}</div>

          {/*Privacy and data*/}
          <div>{toggle === 5 ? "hi" : null}</div>

          {/*Security and Logins*/}
          <div>{toggle === 6 ? "hello" : null}</div>
          {/* end of tabs center  */}
        </div>
      </div>
      {/* end of edit profile center  */}
    </section>
  );
}

export default EditProfile