import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../../shared/Todo";
import { styled } from "styled-components";
import { deleteTodo, updateTodo } from "../../redux/modules/Todo";
import { Link } from "react-router-dom";

type Props = {
  success: boolean;
};

function TodoList({ success }: Props) {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.TodoSlice);
  const updateButton = (id: string) => {
    dispatch(updateTodo(id));
  };
  const deleteButton = (id: string) => {
    dispatch(deleteTodo(id));
  };
  return (
    <section>
      <h1>{success ? "Done..." : "Working..."}</h1>
      {todos
        .filter((item: Todo) => item.isDone === success)
        .map((item: Todo) => {
          return (
            <StDiv key={item.id}>
              <Link to={`/detail/${item.id}`}>상세 페이지</Link>
              <h3>{item.title}</h3>
              <p>{item.descript}</p>
              <button onClick={() => updateButton(item.id)}>
                {success ? "완료" : "작업중.."}
              </button>{" "}
              &nbsp;
              <button onClick={() => deleteButton(item.id)}>삭제</button>
            </StDiv>
          );
        })}
    </section>
  );
}

export default TodoList;

const StDiv = styled.div`
  border: 1px solid green;
  border-radius: 12px;
  color: #c4ed92;
  background-color: #5fcae5;
  align-items: center;
  width: 200px;
  margin: 5px;
  padding: 10px;
`;
