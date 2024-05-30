import { Link } from "react-router-dom";
const Post = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="text-sm md:text-base">Nothing to show... yet! Pictures you post will live here</h1>
        <Link to={`post`}>
          <button className="bg-purple cursor-pointer p-2 px-4 rounded-md">
            <p className="text-white">Post an Ad</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Post