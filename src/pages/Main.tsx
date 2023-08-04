import React from "react";
import TodoForm from "../components/Main/TodoForm";
import TodoList from "../components/Main/TodoList";

type Props = {};

function Main({}: Props) {
  return (
    <div>
      <h1>Main</h1>
      <TodoForm />
      <TodoList success={false} />
      <TodoList success={true} />
    </div>
  );
}

export default Main;
