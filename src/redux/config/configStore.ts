import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
