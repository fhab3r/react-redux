import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning",
    content: "1 2 3 4 5",
    date: sub(new Date(), { minutes: 10 }).toISOString,
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Redux",
    content: "6 7 8 9 10",
    date: sub(new Date(), { minutes: 5 }).toISOString,
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
    prepare(title, content, userId) {
      return {
        payload: {
          id: nanoid(),
          title,
          content,
          date: new Date().toISOString(),
          userId,
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        },
      };
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});
//post added recieved the state and an action
//payload is the form data sent
//pushing it to state-mutates the stat

export const selectAllPosts = (state) => state.post;

export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
