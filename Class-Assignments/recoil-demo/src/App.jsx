import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { counterAtom, even } from "./store/atom/counter";

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <>
      <CurrentCounter />
      <Increase />
      <Decrease />
      <IsEven />
    </>
  );
}

function IsEven() {
  const isEven = useRecoilValue(even);

  return <div>{isEven ? "Even" : "Odd"}</div>;
}

function CurrentCounter() {
  const count = useRecoilValue(counterAtom);

  return (
    <>
      <h2>Current Count: {count}</h2>
    </>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 2);
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
    </>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default App;
