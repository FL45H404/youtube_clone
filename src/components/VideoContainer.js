import React from 'react'
import VideoCard from './VideoCard'


const VideoContainer = ({info}) => {
  return (
    <div className='flex flex-wrap justify-between'>
    {
      info.map((item)=> <VideoCard key={item.id.videoId ? item.id.videoId : item.id} info={item}/>)
    }
    </div>
  )
}

export default VideoContainer