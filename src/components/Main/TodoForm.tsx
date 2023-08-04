import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/modules/Todo";
type Props = {};

function TodoForm({}: Props) {
  const [title, setTitle] = useState("");
  const [descript, setDescript] = useState("");
  const dispatch = useDispatch();

  const ChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const ChangeDescript = (e: any) => {
    setDescript(e.target.value);
  };
  const addTodosButton = (e: any) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      descript,
      isDone: false,
    };
    dispatch(createTodo(newTodo));
    setTitle("");
    setDescript("");
  };
  return (
    <form>
      제목: <input value={title} onChange={ChangeTitle} /> &nbsp; 내용:{" "}
      <input value={descript} onChange={ChangeDescript} /> &nbsp;
      <button onClick={addTodosButton}>추가하기</button>
    </form>
  );
}

export default TodoForm;
