import React from "react";
import { useRecoilState } from "recoil";
import { todosAtomFamily } from "../atoms/atomFamily";

function ShowToDos({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <div>
      {todo.title} =
      {todo.userId}
    </div>
  );
}

export default ShowToDos;
