import { RecoilRoot } from "recoil";
import "./App.css";
import ShowToDos from "./components/ShowToDos";
import SelectorFamilyShowTodos from "./components/SelectorFamilyShowTodos";
import LoadableShowTodo from "./components/LoadableShowTodo";

function App() {
  return (
    <RecoilRoot>
      <LoadableShowTodo id={1} />
      <LoadableShowTodo id={2} />
      <LoadableShowTodo id={3} />
      <LoadableShowTodo id={4} />
      <LoadableShowTodo id={5} />
      <LoadableShowTodo id={6} />
      <LoadableShowTodo id={7} />
    </RecoilRoot>
  );
}

export default App;
