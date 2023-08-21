import React, { useEffect, useState } from 'react'
import { API_KEY } from '../helper/utils'
import Comment from './Comment'

const CommentData = ({id}) => {

const [comment,setComment]=useState([])
const fetchComment=async()=>{
    const res=await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Creplies%2Csnippet&maxResults=100&videoId=${id}&key=`+API_KEY)
    const data=await res.json()
    setComment(data.items)
}
useEffect(()=>{
    fetchComment()
},[id])
  return (
    <div>
        <div className='font-bold '>
            Comments:
        </div>
        {comment && comment.map((item)=><Comment key={item.id} data={item}/> )}
        
        
    </div>
  )
}

export default CommentData