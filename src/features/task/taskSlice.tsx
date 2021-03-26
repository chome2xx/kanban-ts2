import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TypeState } from "../../interface/Types";

const initialState: TypeState = {
  tasks: [],
  numberOfTasks: 0,
  isModalOpen: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    viewAllTasks: (state, action) => {
      state.tasks = action.payload;
      state.numberOfTasks = state.tasks.length;
    },
  },
});

export const { viewAllTasks } = taskSlice.actions;
export const selectTask = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;
