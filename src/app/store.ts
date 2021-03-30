import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import taskReducer from '../features/task/taskSlice';
import modalReducer from '../features/Modal/modalSlice';
import searchReducer from '../features/Header/searchSlice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
    modal:modalReducer,
    title:searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
