import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ReactPlayer from "react-player";
import anon from "../assests/images/anon.png";
import { FaRegCirclePlay } from "react-icons/fa6";
import VideoSkeleton from "../components/videoSkeleton";
const api_load_v1 = import.meta.env.VITE_POSTSV_UPLOADS;
const api_thumbnails = import.meta.env.VITE_thumbnails;

const MyVidoes = () => {
  const { FullScreen } = useStateContext();
  const token = useStateContext();
  const { isPending, isError, data, isLoading, error } = useQuery({
    queryKey: ["myVideos"],
    queryFn: () =>
      axios.get(`${api_load_v1}${token.token?.id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token.token.token}`,
        },
      }),
  });

  if (error)
    return (
      <div className="min-h-screen grid place-items-center">
        <p>
          <h1 className="text-center">Sorry you dont have any Video uploads</h1>
        </p>
      </div>
    );

  return (
    <section className="relative grid md:gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-10 py-4">
      {isLoading && (
        <VideoSkeleton posts={4} />
      )}
      {(data?.data.posts && !isLoading) && data?.data.posts.map((video) => (
        <div key={video.id} className="flex flex-col gap-4">
          <div className="w-full aspect-ratio-box rounded-lg overflow-hidden">
            <ReactPlayer
              width={`100%`}
              height={300}
              url={video?.titlevideourl}
              playsinline={true}
              playbackRate={1}
              playing={true}
              light={
                video.id % 2 === 0
                  ? `${api_thumbnails}/public/storage/${video.thumbnails.slice(7)}`
                  : `${api_thumbnails}/public/storage/${video.thumbnails.slice(7)}`
              }
              controls={true}
              muted={true}
              playIcon={<FaRegCirclePlay size={50} color="#fff" />}
              className="w-fit hover:outline hover:scale-105 duration-300"
            />
          </div>
          <Link to={`/profile/user/${video.user_id}`} className="w-fit">
            <div className="flex items-center gap-2">
              <img
                src={video.user_image === null ? anon : video.user_image}
                alt="user-profile-image"
                className="rounded-full w-8 md:w-10 aspect-square"
              />
              {token && (
                <p className="text-sm font-medium">
                  {video.user_id === token.id && "me"}
                </p>
              )}
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default MyVidoes;
