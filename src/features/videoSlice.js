import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {YOUTUBE_API,API_KEY} from '../utils'
export const fetchVideo=createAsyncThunk('video/fetchVideo',async()=>{
    try{
        const res=await fetch(YOUTUBE_API+API_KEY)
        const data=await res.json()
        return data.items
    }catch(e){
        console.log(e) 
    }
})
export const fetchVideoWithQuery=createAsyncThunk('video/fetchVideoWithQuery',async(searchQuery)=>{
    try{
        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&regionCode=IN&key=`+API_KEY)
          const data=await res.json()
          return data.items
    }catch(e){
        console.log(e) 
    }
})
const videoSlice=createSlice({
    name:'video',
    initialState:{
        videos:[],
        loading:true
    },
    reducers:{
       clearVideos:(state)=>{
        state.videos=[]
       }
    },
    extraReducers:{
        [fetchVideo.pending]:(state)=>{
            state.loading=true;
        },
        [fetchVideo.fulfilled]:(state,action)=>{
            state.loading=false;
            state.videos=action.payload;
        },
        [fetchVideo.rejected]:(state)=>{
            state.loading=false;
            state.videos=[]
        },
        [fetchVideoWithQuery.pending]:(state)=>{
            state.loading=true;
        },
        [fetchVideoWithQuery.fulfilled]:(state,action)=>{
            state.loading=false;
            state.videos=action.payload;
        },
        [fetchVideoWithQuery.rejected]:(state)=>{
            state.loading=false;
            state.videos=[]
        },
        
    }
})
export const {clearVideos}=videoSlice.actions
export default videoSlice.reducer