import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { API_KEY, YOUTUBE_WATCH_API } from "../utils";
import VideoDetails from "./VideoDetails";
import CommentData from "./CommentData";
import RelatedVideo from "./RelatedVideo";
import { useData } from "./useData";
const WatchList = () => {
  const [searchParams] = useSearchParams();
  // const [videoData,setVideoData]=useState()

  // const fetchData=async()=>{
  //    const res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get('v')}&key=`+API_KEY)
  //     const data=await res.json()
  //     setVideoData(data)
  // }
  // useEffect(()=>{
  //     fetchData()
  // },[])
  const videoData = useData();
  // setVideoData(data)

  if (!videoData) return null;
  return (
    <div className="mt-16 flex flex-col lg:flex-row ">
      <div className="flex-1 w-full lg:w-[60%] ">
        <div className="m-5">
          <ReactPlayer
            controls
            width="100%"
            height="500px"
            url={YOUTUBE_WATCH_API + searchParams.get("v")}
          />
        </div>
        <VideoDetails videoData={videoData} />
        <div className="m-5">
          <CommentData id={searchParams.get("v")} />
        </div>
      </div>
      <div className="mt-4 flex-none ">
        <RelatedVideo />
      </div>
    </div>
  );
};

export default WatchList;
