import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface TypeState {
  isModalOpen: boolean;
}

const initialState: TypeState = {
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state) => {
      state.isModalOpen = true;
    },
    close: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { open, close } = modalSlice.actions;
export const selectModalState = (state: RootState) => state.modal.isModalOpen;

export default modalSlice.reducer;
