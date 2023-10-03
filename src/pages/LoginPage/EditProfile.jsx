import {useState} from 'react'
import PersonalInfo from './component/PersonalInfo';
import ProfileEdit from './component/ProfileEdit';

const EditProfile = () => {
       const [toggle, setToggle] = useState(1);

       const updateToggle = (id) => {
         setToggle(id);
       };
  return (
    // Edit-profile
    <section className="">
      {/* edit-profile-center  */}
      <div className="p-6  md:flex md:gap-x-[.2rem] mdxs:gap-[3rem] mdsm:gap-[4rem] lg:gap-[5rem] large:gap-[6rem] exl:gap-[9rem]  px-10 ">
        {/* each edit  */}
        <article className="mt-[7rem] px-[5rem] md:px-0">
          {/* single-tab  */}
          <div className="">
            <button onClick={() => updateToggle(1)} className>
              <p className={toggle === 1 ? "font-700" : ""}>EditProfile</p>
            </button>
          </div>

          {/* single-tab  */}
          <div className="mt-5">
            <button
              onClick={() => updateToggle(2)}
              className={toggle === 2 ? "" : null}
            >
              <p className={toggle === 2 ? "font-700" : ""}> Personal Information</p>
            </button>
          </div>
          {/* single-tab  */}
          <div className="mt-5">
            <button
              onClick={() => updateToggle(3)}
              className={toggle === 3 ? "" : null}
            >
              <p className={toggle === 3 ? "font-700" : ""}>Password</p>
            </button>
          </div>
          {/* single-tab  */}
          <div className="mt-5">
            <button
              onClick={() => updateToggle(4)}
              className={toggle === 4 ? "" : null}
            >
              <p className={toggle === 4 ? "font-700" : ""}>
                Email Notification
              </p>
            </button>
          </div>
          {/* single-tab  */}
          <div className="mt-5">
            <button
              onClick={() => updateToggle(5)}
              className={toggle === 5 ? "" : null}
            >
              <p className={toggle === 5 ? "font-700" : ""}>Privacy and data</p>
            </button>
          </div>
          {/* single-tab  */}
          <div className="mt-5">
            <button
              onClick={() => updateToggle(6)}
              className={toggle === 6 ? "" : null}
            >
              <p className={toggle === 6 ? "font-700" : ""}>
                Security and Logins
              </p>
            </button>
          </div>
        </article>
        {/* end of each edit  */}

        {/* informations  */}
        <div className="md:mt-0 px-[2rem] md:px-0">
          {/*edit Profile*/}
          <div>{toggle === 1 ? <ProfileEdit/> : null}</div>

          {/* Personal Information */}
          <div>{toggle === 2 ? <PersonalInfo /> : null}</div>

          {/* Password */}
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