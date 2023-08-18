import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {API_KEY} from '../utils'
export function useData(){
    const [searchParams]=useSearchParams()
    const [data,setData]=useState()
    const fetchData=async()=>{
        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get('v')}&key=`+API_KEY)
         const data=await res.json()
         setData(data)
     }
     useEffect(()=>{
         fetchData()
     },[])
     return data;
}