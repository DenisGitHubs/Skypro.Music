import { configureStore } from "@reduxjs/toolkit";
import playerReducer from './player.slice'
import { queryApi } from "../Api/User.API";
///reducer maybe more
export default configureStore({
    reducer:{
        player: playerReducer,
        [queryApi.reducerPath]: queryApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(queryApi.middleware) 
})
 