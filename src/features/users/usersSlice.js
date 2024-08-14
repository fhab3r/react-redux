import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "0", name: "fritz" },
  { id: "1", name: "owen" },
  { id: "2", name: "richie" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
