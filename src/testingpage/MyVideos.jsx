// this is the user upload page for the noraml ads (which is just images ) video ads
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import FetchUserposts from "../hooks/LoggedInUserPost";
import { useQuery } from "@tanstack/react-query";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Loader from "../loader";
import React from "react";
import ReactPlayer from "react-player";
import anon from "../assests/images/anon.png";
import thumbnail1 from "../assests/images/feed1.svg";
import thumbnail2 from "../assests/images/feed2.svg";
import thumbnail3 from "../assests/images/feed3.svg";
import thumbnail4 from "../assests/images/feed4.svg";
import { FaRegCirclePlay } from "react-icons/fa6";
const api_load_v1 = import.meta.env.VITE_POSTSV_UPLOADS;
const api_thumbnails = import.meta.env.VITE_thumbnails;

const MyVidoes = () => {
  const { FullScreen } = useStateContext();
  const token = useStateContext();
  const { isPending, isError, data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      axios.get(`${api_load_v1}${token.token?.id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token.token.token}`,
        },
      }),
  });

  if (isPending) {
    return <Loader />;
  }

  if (error)
    return (
      <div className="min-h-screen grid place-items-center">
        <p>
          <h1>Sorry you dont have any Video uploads</h1>
        </p>
      </div>
    );

  return (
    <section className="relative grid md:gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-10 py-4">
      {isLoading && (
        <div className="md:col-span-2 lg:col-span-3 exl:col-span-4">
          <Loader />
        </div>
      )}
      {data?.data.posts.map((video) => (
        <div key={video.id} className="flex flex-col gap-4">
          <div className="w-full aspect-ratio-box rounded-lg overflow-hidden">
            <ReactPlayer
              width={280}
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
              // loop={true}
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
