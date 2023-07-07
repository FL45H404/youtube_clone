import React from 'react'
import VideoQueryCard from './VideoQueryCard'
const VideoQueryContainer = ({info}) => {
  return (
    <div className='flex flex-wrap justify-between'>
    {
      info.map((item)=> <VideoQueryCard key={item.id.videoID} info={item}/>)
    }
    </div>
  )
}

export default VideoQueryContainer