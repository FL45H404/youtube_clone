import React from 'react'
import { Link } from 'react-router-dom'
import abbreviate from '@jalato/abbreviate'
const VideoCard = ({info}) => {
  let id=info.id.videoId ? info.id.videoId : info.id
  return (
    <div className='w-[40%] sm:w-[30%] md:w-[23%] my-3 hover:shadow-md'>
    <Link to={'/watch?v='+ id}>
    <div className='p-2 rounded-lg'>
        <img className='rounded-lg' 
        alt='thumbnail' src={info?.snippet?.thumbnails?.medium?.url}/>
      </div>
      <div className='ml-2'>
          <div className='font-bold truncate '>
          {info?.snippet?.title}
          </div>
          <div className='text-sm text-gray-400 pt-1'>
          {info?.snippet?.channelTitle}
          </div>
          {!info.id.videoId &&
          <div className='text-sm text-gray-400'>
          {abbreviate(info?.statistics?.viewCount,2)} views
          </div>
}
      </div>
      </Link>
    </div>
  )
}

export default VideoCard