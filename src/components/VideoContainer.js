import React from 'react'
import VideoCard from './VideoCard'
import VideoQueryCard from './VideoQueryCard';

const VideoContainer = ({info}) => {
  return (
    <div className='flex flex-wrap justify-between'>
    {
      info.map((item)=>item.id ? <VideoCard key={item.id} info={item}/> :  <VideoQueryCard key={item.id.videoID} info={item}/>)
    }
    </div>
  )
}

export default VideoContainer