import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
const store=configureStore({
    reducer:{
        menu:menuSlice,
        search:searchSlice,
        video:videoSlice,
    }
})

export default store