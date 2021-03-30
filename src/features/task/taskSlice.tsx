import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TypeState } from "../../interface/Types";

const initialState: TypeState = {
  documents: [],
  numberOfTasks: 0,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    viewAllTasks: (state, action) => {
      state.documents = action.payload;
      state.numberOfTasks = state.documents.length;
    },
  },
});

export const { viewAllTasks } = taskSlice.actions;
export const selectTask = (state: RootState) => state.task.documents;

export default taskSlice.reducer;
