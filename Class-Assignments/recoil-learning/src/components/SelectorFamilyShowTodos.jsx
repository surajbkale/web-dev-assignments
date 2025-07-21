import React from "react";
import { useRecoilState } from "recoil";
import { todosAtomFamily } from "../atoms/atomFamily";

function SelectorFamilyShowTodos({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <div>
      {todo.title} = {todo.completed ? "Done" : "Pending"}
    </div>
  );
}

export default SelectorFamilyShowTodos;
