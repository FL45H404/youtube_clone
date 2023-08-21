import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import {
  clearVideos,
  fetchVideo,
  fetchVideoWithQuery,
} from "../features/videoSlice";

const MainContainer = () => {
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const videos = useSelector((state) => state.video.videos);
  const dispatch = useDispatch();
  ////////////////////////////////////
  // const fetchData=async()=>{
  //   const res=await fetch(YOUTUBE_API+API_KEY)
  //   const data=await res.json()
  //   setVideos(data.items)
  //   // console.log(data.items)
  // }
  // const fetchDataWithQuery=async()=>{
  //   const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&regionCode=IN&key=`+API_KEY)
  //   const data=await res.json()
  //   setVideos(data.items)
  // }
  //###################################################

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchVideoWithQuery(searchQuery));
    } else {
      dispatch(fetchVideo());
    }

    return ()=>{
      dispatch(clearVideos())
    }
  }, [searchQuery]);

  // if (!videos) return <Shimmer/>
  return (
    <div className="w-full p-5 mt-16 ">
      <ButtonList />
      {videos.length === 0 ? <Shimmer /> : <VideoContainer info={videos} />}
    </div>
  );
};

export default MainContainer;
