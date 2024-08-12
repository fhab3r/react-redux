import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    counter: counterReducer,
  },
});
