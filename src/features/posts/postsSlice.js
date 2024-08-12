import { createSlice } from "@reduxjs/react";

const initialState = [
  { id: "1", title: "Learning", content: "1 2 3 4 5" },
  { id: "2", title: "Redux", content: "6 7 8 9 10" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});
//post added recieved the state and an action
//payload is the form data sent
//pushing it to state-mutates the stat

export const selectAllPosts = (state) => state.post;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
