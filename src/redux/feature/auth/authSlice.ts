import { createSlice } from "@reduxjs/toolkit";

type TUser = {
  user: null | object;
  token: null | string;
};
const initialState: TUser = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, user } = action.payload;
      (state.token = token), (state.user = user);
    },
    logOut: (state) => {
      (state.token = null), (state.user = null);
    },
  },
});
export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;
