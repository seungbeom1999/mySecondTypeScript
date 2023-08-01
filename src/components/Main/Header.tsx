import React from "react";
import { styled } from "styled-components";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { createTodos } from "../../redux/modules/todos";
import { eventFormChange } from "../../modul/Database";
function Header() {
  const [title, setTitle] = useInput("");
  const [contents, setContents] = useInput("");
  const dispatch = useDispatch();

  const addHandleButton = (e: eventFormChange) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      contents,
      isDone: false,
    };
    dispatch(createTodos(newTodo));
    setTitle("");
    setContents("");
  };

  return (
    <StHeader>
      <form onSubmit={addHandleButton}>
        제목 <input type="text" value={title} onChange={setTitle} />
        내용 <input type="text" value={contents} onChange={setContents} />{" "}
        &nbsp;
        <button>추가하기</button>
      </form>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.header`
  background-color: #f7e9c3;
  padding: 10px;
`;
