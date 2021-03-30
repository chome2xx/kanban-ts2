import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface TypeState {
  title: string;
}

const initialState: TypeState = {
  title: "",
};

export const searchSlice = createSlice({
  name: "searchTitle",
  initialState,
  reducers: {
    setSearchTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setSearchTitle } = searchSlice.actions;
export const selectSearchTitle = (state: RootState) => state.title.title;

export default searchSlice.reducer;
