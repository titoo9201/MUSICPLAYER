import { createSlice } from "@reduxjs/toolkit";

const LikedSlice = createSlice({
  name: "liked", // better to match slice purpose
  initialState: [],
  reducers: {
    AddLike: (state, action) => {
      const exist = state.find(
        (song) => song.songindex === action.payload.songindex
      );

      // If the song already exists, do nothing
      if (!exist) {
        state.push(action.payload);
      }
    },

    RemoveLike: (state, action) => {
      return state.filter(
        (song) => song.songindex !== action.payload.songindex
      );
    },
  },
});

export const { AddLike, RemoveLike } = LikedSlice.actions;
export default LikedSlice.reducer;
