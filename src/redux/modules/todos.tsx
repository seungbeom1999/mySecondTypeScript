import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../modul/Database";

const initialState: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: "리액트 공부하기",
    contents: "실습 열심히 하기",
    isDone: false,
  },
  {
    id: crypto.randomUUID(),
    title: "타입 스크립트 공부하기",
    contents: "실습 열심히",
    isDone: false,
  },
  {
    id: crypto.randomUUID(),
    title: "타입스크립트 자료 조사",
    contents: "책 열심히 읽기",
    isDone: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodos: (state: Todo[], action: PayloadAction<Todo>) => {
      return [...state, action.payload];
    },
    updateTodos: (state: Todo[], action: PayloadAction<string>) => {
      return state.map((item: Todo) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
    },
    deleteTodos: (state: Todo[], action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { createTodos, updateTodos, deleteTodos } = todosSlice.actions;
export default todosSlice.reducer;
