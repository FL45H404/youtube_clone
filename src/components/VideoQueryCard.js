import React from 'react'
import { Link } from 'react-router-dom'
const VideoQueryCard = ({info}) => {
  return (
    <div className='w-[23%] my-3 hover:shadow-md'>
    <Link to={'/watch?v='+info?.id?.videoId}>
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
      </div>
      </Link>
    </div>
  )
}

export default VideoQueryCard