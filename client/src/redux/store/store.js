import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import taskReducer from "../slices/TaskSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: taskReducer,
  },
});
