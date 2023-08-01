import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../../redux/config/configStore";
import { deleteTodos, updateTodos } from "../../redux/modules/todos";

interface Prop {
  success: boolean;
}

function Body({ success }: Prop) {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const clearHandleButton = (id: string) => {
    dispatch(updateTodos(id));
  };
  const deleteHandleButton = (id: string) => {
    dispatch(deleteTodos(id));
  };

  return (
    <StMain>
      <h2>{success ? "Done..!" : "Working.."}</h2>
      {todos
        .filter((item) => item.isDone === success)
        .map((todo) => {
          return (
            <Stdiv key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.contents}</p>
              <button onClick={() => clearHandleButton(todo.id)}>
                {success ? "취소" : "완료"}
              </button>{" "}
              &nbsp;
              <button onClick={() => deleteHandleButton(todo.id)}>삭제</button>
            </Stdiv>
          );
        })}
    </StMain>
  );
}

export default Body;

const StMain = styled.main`
  background-color: #d9f7c3;
  padding: 10px;
`;

const Stdiv = styled.div`
  border: solid 1px black;
  border-radius: 12px;
  margin: 10px;
  padding: 10px;
`;
