import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface TypeState {
  name: string;
}

const initialState: TypeState = {
  name: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setProject } = projectSlice.actions;
export const selectProject = (state: RootState) => state.project;

export default projectSlice.reducer;
