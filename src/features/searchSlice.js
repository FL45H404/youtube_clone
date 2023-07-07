import { createSlice } from "@reduxjs/toolkit"

const searchSlice=createSlice({
    name:'search',
    initialState:{
        searchQuery:''
    },
    reducers:{
            addQuery:(state,action)=>{
                state.searchQuery=action.payload
            },
            removeQuery:(state)=>{
                state.searchQuery=''
            }
    }
})

export const {addQuery,removeQuery}=searchSlice.actions
export default searchSlice.reducer