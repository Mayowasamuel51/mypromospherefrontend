import { Link } from "react-router-dom";
import Myuploads from "../../testingpage/Myupload";
const Post = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Link to={`post`}>
          <button className="bg-purple cursor-pointer p-2 px-4 rounded-md">
            <p className="text-white">Post an Ad</p>
          </button>
        </Link>
        <div className="px-4 lg:px-10 py-2 lg:py-10">
          <Myuploads />
        </div>
      </div>
    </div>
  );
}

export default Post