import React from "react";
import { useRecoilStateLoadable } from "recoil";
import { todosAtomFamily } from "../atoms/loadable";

function LoadableShowTodo({ id }) {
  const [todos, setTodos] = useRecoilStateLoadable(todosAtomFamily(id));

  if (todos.state === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {todos.contents.todo} ={todos.contents.completed ? "done" : "pending"}
    </div>
  );
}

export default LoadableShowTodo;
