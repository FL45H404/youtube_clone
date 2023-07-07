import React from 'react'

const VideoDetails = ({videoData}) => {
  return (
    
    <div className='m-5'>
            <div className='font-bold'>{videoData.items[0].snippet.title}</div>
            <div className='flex mt-2'>
                <div className='p-2'>
                <img className='h-8'
                src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" 
                alt="userlogo" /></div>
                <div className='mt-2 pl-4 text-gray-500 font-bold'>{videoData.items[0].snippet.channelTitle}</div></div> 
                <div>
            </div>
        </div>
  
  )
}

export default VideoDetails