import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { API_KEY ,YOUTUBE_API} from '../utils'
import {useSelector} from 'react-redux'
import VideoQueryContainer from './VideoQueryContainer'
import Shimmer from './Shimmer'
const MainContainer = () => {
  const searchQuery=useSelector((state)=>state.search.searchQuery)
  const [videos,setVideos]=useState([])

  const fetchData=async()=>{
    const res=await fetch(YOUTUBE_API+API_KEY)
    const data=await res.json()
    setVideos(data.items)
  }
  const fetchDataWithQuery=async()=>{
    const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&regionCode=IN&key=`+API_KEY)
    const data=await res.json()
    setVideos(data.items)
  }

  useEffect(()=>{
    if(searchQuery===''){
      fetchData()
    }else{
      fetchDataWithQuery()
    }
  },[searchQuery])
  
  // if (videos.length===0) return 'loading'
  return (
    <div className='w-full p-5 mt-16 '>
    {videos.length===0 ? ( <Shimmer/>) : (<>
      <ButtonList />
      {videos && searchQuery ? <VideoQueryContainer info={videos}/> :  <VideoContainer info={videos}/>}
      </>)}
    
    </div>
  )
}

export default MainContainer