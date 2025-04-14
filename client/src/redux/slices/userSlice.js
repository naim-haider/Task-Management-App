import { createSlice } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("token");
const storedUser = localStorage.getItem("user");

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: storedToken || null,
    isAuthenticated: !!storedToken,
    user: storedUser ? JSON.parse(storedUser) : null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setToken, logout } = userSlice.actions;
export default userSlice.reducer;
