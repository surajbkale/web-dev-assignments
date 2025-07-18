import { usePrevious } from "@uidotdev/usehooks";
import { useState } from "react";

export default function UsePrevious() {
  const [value, setValue] = useState(0);
  const previousValue = usePrevious(value);
  const [_anything, setAnything] = useState(true);

  function increseValue() {
    setValue((v) => v + 1);
  }

  function decreseValue() {
    setValue((v) => v - 1);
  }

  function reRender() {
    setAnything((current) => !current);
  }

  return (
    <>
      <button onClick={increseValue}>Increse</button>
      <button onClick={decreseValue}>Decrese</button>
      <button onClick={reRender}>Glich</button>

      <h1>Current Value: {value}</h1>
      <h1>Previous Value: {previousValue}</h1>
    </>
  );
}
