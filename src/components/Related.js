import React from 'react'
import { Link } from 'react-router-dom'
import abbreviate from '@jalato/abbreviate'
const Related = ({info}) => {
  return (<>
    {info.map((item)=>{
        return (
        <div className='my-2 hover:shadow-md w-full'>
            <Link to={'/watch?v='+item.id}>
            <div className='flex flex-row'>
                <div className='p-2 rounded-lg'>
                    <img className='rounded-lg w-40' 
                    alt='thumbnail' src={item?.snippet?.thumbnails?.medium?.url}/>
                </div>
                <div className='ml-2 w-[280px]'>
                    <div className='font-bold truncate '>
                        {item?.snippet?.title}
                    </div>
                    <div className='text-sm text-gray-400 pt-1'>
                        {item?.snippet?.channelTitle}
                    </div>
                    <div className='text-sm text-gray-400'>
                        {abbreviate(item?.statistics?.viewCount,2)} views
                    </div>
                </div>
            </div>
            </Link>
        </div>)
    })}
    
    </>
  )
}

export default Related