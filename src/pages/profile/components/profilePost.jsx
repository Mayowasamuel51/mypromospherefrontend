import Myuploads from "../../../testingpage/Myupload"
import { useOutletContext } from "react-router-dom";

const ProfilePost = () => {
    const { id } = useOutletContext()
  return (
    <div className="px-4 lg:px-10 py-2 lg:py-10">
        <Myuploads id={id} />
    </div>
  )
}

export default ProfilePost;