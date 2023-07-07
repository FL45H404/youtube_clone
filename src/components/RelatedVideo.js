import React, { useEffect, useState } from 'react'
import { API_KEY, YOUTUBE_API } from '../utils'
import Related from './Related'

const RelatedVideo = () => {
    const [videos,setVideos]=useState([])
  const fetchData1=async()=>{
    const res=await fetch(YOUTUBE_API+API_KEY)
    const data=await res.json()
    setVideos(data.items)
    
  }
  useEffect(()=>{
    fetchData1()
  },[])

  if(!videos) return null
  return (
    <Related info={videos}/>
     )
}

export default RelatedVideo