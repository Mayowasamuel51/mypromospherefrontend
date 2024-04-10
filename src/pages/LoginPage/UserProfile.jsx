import {useState} from 'react'
import Navbar from "../LoginPage/component/Navbar"
import roundedImg from "../../assests/images/Ellipse 3.png"
import Post from './component/Post'
import Saved from './component/Saved'
import { Link } from 'react-router-dom'

const UserProfile = () => {
   const [toggle, setToggle] = useState(1);

   const updateToggle = (id) => {
     setToggle(id);
   };
  return (
    <>
      {/* <Navbar /> */}
      <section className="">
        {/* user-info  */}
        <article className="mt-12">
          {/* image  */}
          <img
            src={roundedImg}
            alt=""
            className="w-[30%] md:w-[150px] mx-auto"
          />
          <h1 className="text-center font-700 md:text-[1.4rem] mt-6">
            Beauty by AD
          </h1>
          {/* btns  */}
          <div className="flex items-center justify-center gap-x-3 mt-4">
            {/* share-btn  */}
            <button className="bg-[#BCB9B9] p-2 px-4 rounded-md">
              <p className="text-center">share</p>
            </button>
            {/* edit profile  */}
            <Link to={'EditProfile'}>
              <button className="bg-[#BCB9B9] p-2 px-4 rounded-md">
                <p className="text-center">Edit profile</p>
              </button>
            </Link>
          </div>
        </article>

        {/*post and saved */}
        <article className="mt-6">
          <div className="flex items-center justify-center gap-x-6">
            {/* tab-btn  */}
            <div className="flex items-center gap-x-4">
              <button
                onClick={() => updateToggle(1)}
                className={
                  toggle === 1
                    ? "border-2 border-[#000000] border-t-0 border-r-0 border-l-0"
                    : ""
                }
              >
                Post
              </button>
            </div>
            <button
              onClick={() => updateToggle(2)}
              className={
                toggle === 2
                  ? "border-2 border-[#000000] border-t-0 border-r-0 border-l-0"
                  : null
              }
            >
              Saved
            </button>
          </div>
          {/* end of post and saved   */}

          {/* tabs-center  */}
          <div className="mt-12">
            {/*post*/}
            <div className="text-center">{toggle === 1 ? <Post /> : null}</div>

            {/* saved */}
            <div className="text-center">{toggle === 2 ? <Saved /> : null}</div>
            {/* end of tabs center  */}
          </div>
        </article>
      </section>
    </>
  );
}

export default UserProfile