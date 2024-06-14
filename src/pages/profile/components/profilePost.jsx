import OtherUsersPosts from "./OtherUsersPosts";
import { useOutletContext } from "react-router-dom";

const ProfilePost = () => {
    const id  = useOutletContext()
  return (
    <div className="relative px-4 lg:px-10 py-2 lg:py-10">
        <OtherUsersPosts id={id} />
    </div>
  )
}

export default ProfilePost;