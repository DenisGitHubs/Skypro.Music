import { configureStore } from "@reduxjs/toolkit";
import playerReducer from './player.slice'
import { queryApi } from "../API/tracks.api";
import { MainApi } from "../API/tracks.api";
///reducer maybe more
export default configureStore({
    reducer:{
        player: playerReducer,
        [queryApi.reducerPath]: queryApi.reducer,
        [MainApi.reducerPath]: MainApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(queryApi.middleware).concat(MainApi.middleware) 
})