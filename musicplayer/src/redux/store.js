import {configureStore} from '@reduxjs/toolkit'
import playlistSlice   from './PlaylistSlice'
import LikedSlice from './Likedslice'
export const store = configureStore({
   reducer:{
   playlist:playlistSlice,
   liked:LikedSlice
   }
    
})

