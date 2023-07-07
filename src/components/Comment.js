import React from 'react'

const Comment = ({data}) => {
  return (
    <div className='m-4 border-b shadow-sm'>
            <div className='flex items-center'>
                <div className='h-8'>
                    <img className='h-8' 
                    src={data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} 
                    alt='userlogo'/>
                </div>
            <div className='flex flex-col ml-5'>
                <div className='font-bold text-sm'>{data?.snippet?.topLevelComment?.snippet?.authorDisplayName}</div>
                <div className='mb-2'>{data?.snippet?.topLevelComment?.snippet?.textOriginal}</div>
            </div>
        </div>
        </div>
  )
}

export default Comment