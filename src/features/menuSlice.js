import { createSlice } from "@reduxjs/toolkit";

const menuSlice=createSlice({
    name:'menu',
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state,action)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=true;
        }
    }
})
export const {toggleMenu,closeMenu}=menuSlice.actions
export default menuSlice.reducer