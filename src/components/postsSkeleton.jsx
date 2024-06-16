import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import React from 'react'

const PostsSkeleton = () => {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
        <Skeleton width="100%" height={280} />
        <Skeleton circle className="w-8 md:w-10 aspect-square" />
    </div>
  )
}

export default PostsSkeleton