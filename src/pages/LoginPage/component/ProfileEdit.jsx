import React, { useRef, useState } from 'react'
import blankImage from "../../../assests/images/blank Image.png"

const ProfileEdit = () => {
    const inputRef = useRef(null)
    const[image, setImage] = useState("")

    const handleImageChange =(e)=>{
      const file= e.target.files
      const profilePhoto = e.target.files[0]
      setImage(profilePhoto)
    }
    const deleteImage =()=>{
        setImage("")
    }
  return (
    <section className="md:w-[500px] large:w-[600px]">
      {/* header  */}
      <header>
        <h3 className="md:text-[1.5rem] font-600 mt-[3rem] md:mt-0">
          Edit Profile
        </h3>
        <p className="font-400">Set up your presence and hiring needs</p>

        {/* upload-image  */}
        <article className="mt-7 flex items-center gap-[1.25rem] ml-[-.rem]">
          {/* image  */}

          {image ? <img src={URL.createObjectURL(image)} alt="profilephoto" className="w-[88px] h-[84.56px] rounded-[5rem]" /> : <img src={blankImage} alt="blankImage" className="w-[80px]" /> }
          {/* btns  */}
          <div className="flex gap-x-[.5rem] items-center">
        {/* upload button */}
        <button className="relative cursor-pointer ml-[.4rem]">
        <input
          type="file"
          className="relative ml-[-3rem] max-w-[230px] z-20 opacity-[0] cursor-pointer"
          ref={inputRef}
          onChange={handleImageChange}
        />
        {/* upload  */}
        <button
          className={`flex gap-x-2 border px-3 py-2 rounded-md absolute top-[-.3rem] left-0 z-10 cursor-pointer`}
        >
          <h3>Upload new picture</h3>
        </button>
        {/* end of upload  */}
      </button>
      {/* end of upload-button  */}
            {/* delete  */}
            <button className="bg-[#D9D9D9] text-[.8rem] smd:text-[1rem] h-[3.2rem] px-4 rounded-md" onClick={deleteImage}>
              <p>Delete</p>
            </button>
          </div>
        </article>
      </header>
      {/* form  */}
      <article className="mt-5">
        <form>
          {/* name  */}
          <div>
            <label htmlFor="name" className="font-600">
              Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="border border-[#3D217A] mt-1 w-[100%] focus:outline-none p-3 text-[1rem] rounded-md"
            />
          </div>
          {/* location  */}
          <div className="mt-6">
            <label htmlFor="location" className="font-600">
              Location
            </label>{" "}
            <br />
            <input
              type="text"
              className="border border-[#3D217A] mt-1 w-[100%] focus:outline-none p-3 text-[1rem] rounded-md"
            />
          </div>
          {/*About*/}
          <div className="mt-6">
            <label htmlFor="About" className="font-600">
              About
            </label>{" "}
            <br />
            <input
              type="text"
              className="border border-[#3D217A] mt-1 w-[100%] focus:outline-none p-3 text-[1rem] rounded-md pb-20 placeholder:text-black "
              placeholder="Tell Us About You"
            />
          </div>
          {/* Website  */}
          <div className="mt-6">
            <label htmlFor="website" className="font-600">
              Website
            </label>{" "}
            <br />
            <input
              type="text"
              className="border border-[#3D217A] mt-1 w-[100%] focus:outline-none p-3 text-[1rem] rounded-md placeholder:text-black"
              placeholder="Add a link to drive traffic to your site "
            />
          </div>
          {/*Brand Name*/}
          <div className="mt-6">
            <label htmlFor="website" className="font-600">
              Brand Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="border border-[#3D217A] mt-1 w-[100%] focus:outline-none p-3 text-[1rem] rounded-md placeholder:text-black"
            />
          </div>
        </form>
        
      </article>
      {/* end of form  */}

     
    </section>
  );
}

export default ProfileEdit
