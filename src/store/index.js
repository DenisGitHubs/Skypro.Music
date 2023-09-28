import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import playerReducer from './player.slice'

///reducer maybe more
export default configureStore({
    reducer:{
        player: playerReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})