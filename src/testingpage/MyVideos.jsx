// this is the user upload page for the noraml ads (which is just images ) video ads
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { Link } from 'react-router-dom';
import FetchUserposts from "../hooks/LoggedInUserPost";
import { useQuery } from "@tanstack/react-query";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Loader from "../loader";
import React from 'react'
import ReactPlayer from 'react-player'
const api_load_v1 = import.meta.env.VITE_POSTSV_UPLOADS;

const MyVidoes = () => {
  const { FullScreen } = useStateContext()
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
    return <span>Loading...</span>;
  }

  if (error) return <div className='min-h-screen grid place-items-center'><p><h1>Sorry you dont have any Video uploads</h1></p></div>

  return (
    <div className="overflow-x-hidden">
      <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
        {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
        {data?.data.posts.map((item) => (
          <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">

            <ReactPlayer width='100%'
              height='100%' className='react-player'
              url={`${item.titlevideourl}`} playing={true} controls={true} />
            {/* {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                    <SplideSlide key={img.id} className='rounded-md w-fit border-2'>
                                        <LazyLoadImage effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                                    </SplideSlide>
                                ))} */}

            <Link to="/profile/timilehin babade">
              <div className="flex items-center gap-2">
                <LazyLoadImage effect="blur" src={item.user_image} alt="" className="rounded-full w-8 md:w-10 aspect-square" />
                <p className="text-sm font-medium">USER-ID {item.user_id}</p>
              </div>
            </Link>

          </Link>
        ))}
      </section>
    </div>
  );

}

export default MyVidoes