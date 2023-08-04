import { Todo } from "../../shared/Todo";
import { createSlice } from "@reduxjs/toolkit";
const initialState: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: "리액트 공부하기",
    descript: "책 읽기",
    isDone: false,
  },
  {
    id: crypto.randomUUID(),
    title: "타입 스크립트 공부하기",
    descript: "실습하기",
    isDone: false,
  },
  {
    id: crypto.randomUUID(),
    title: "타입 스크립트 공부하기",
    descript: "책 읽기",
    isDone: false,
  },
];

const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    createTodo: (state: Todo[], action) => {
      return [...state, action.payload];
    },
    updateTodo: (state: Todo[], action) => {
      return state.map((item: Todo) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
    deleteTodo: (state: Todo[], action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { createTodo, updateTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
