import { Link } from "react-router-dom";
const Post = () => {
  return (
    <div>
      <h1 className="text-sm md:text-base">Nothing to show... yet! Pictures you post will live here</h1>
      <Link to={`post`}>
        <button className="bg-purple mt-2 md:mt-6 p-2 px-4 rounded-md">
          <p className="text-white">Post a picture</p>
        </button>
      </Link>
    </div>
  );
}

export default Post