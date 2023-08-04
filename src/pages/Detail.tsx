import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Todo } from "../shared/Todo";
import { styled } from "styled-components";

type Props = {};

function Detail({}: Props) {
  const param = useParams();
  console.log(param.id);
  const Todos = useSelector((state: any) => state.TodoSlice);
  console.log(Todos);
  const Object = Todos.find((item: Todo) => item.id === param.id);
  return (
    <StDiv key={Object.id}>
      <Link to="/">메인 페이지로 이동....</Link>
      <h3>{Object.title}</h3>
      <p>{Object.descript}</p>
      <button>{Object.isDone ? "완료" : "작업중.."}</button> &nbsp;
      <button>삭제</button>
    </StDiv>
  );
}

export default Detail;

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
