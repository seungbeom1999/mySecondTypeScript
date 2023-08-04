import { configureStore, combineReducers } from "@reduxjs/toolkit";
import TodoSlice from "../modules/Todo";

const rootreducer = combineReducers({
  TodoSlice: TodoSlice,
});

const store = configureStore({
  reducer: rootreducer,
});

export default store;

export type RootState = ReturnType<typeof rootreducer>;
