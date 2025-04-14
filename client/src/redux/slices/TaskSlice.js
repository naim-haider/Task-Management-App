import { createSlice } from "@reduxjs/toolkit";

const storedTasks = localStorage.getItem("tasks");

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: storedTasks ? JSON.parse(storedTasks) : [],
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task._id === action.payload._id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { setTasks, addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
