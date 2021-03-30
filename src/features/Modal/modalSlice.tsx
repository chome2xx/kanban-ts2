import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TypeDocument } from "../../interface/Types";

interface TypeState {
  isModalOpen: boolean;
  mode: string;
  document: TypeDocument;
}

const today = new Date().toISOString();

const initialState: TypeState = {
  isModalOpen: false,
  mode: "",
  document: {
    id: "",
    task: {
      title: "",
      memo: "",
      dueDate: "",
      priority: "",
      estimation: 0,
      actualTime: 0,
      phase: "",
      completed: false,
      update: today,
    },
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    create: (state, action) => {
      state.isModalOpen = true;
      state.mode = "create";
    },
    edit: (state, action) => {
      state.isModalOpen = true;
      state.document = action.payload;
      state.mode = "edit";
    },
    close: (state) => {
      state.isModalOpen = false;
      state.document = initialState.document;
      state.mode = "";
    },
  },
});

export const { create, edit, close } = modalSlice.actions;
export const selectModalState = (state: RootState) => state.modal;

export default modalSlice.reducer;
