import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import playerReducer from './player.slice'
import { queryApi } from "../QueryApi";
///reducer maybe more
export default configureStore({
    reducer:{
        player: playerReducer,
        [queryApi.reducerPath]: queryApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(queryApi.middleware) 
})
