import React from "react";
import { useState } from "react";
import { usePrev, usePrevAlternate } from "../hooks/usePrev";

function UsePrevious() {
  const [number, setNumber] = useState(0);
  const [anything, setAnything] = useState(false);
  const prevNumber = usePrevAlternate(number);

  const increment = () => {
    setNumber((n) => n + 1);
  };

  const decrement = () => {
    setNumber((n) => n - 1);
  };

  const triggerRerender = () => {
    setAnything((b) => !b);
  };

  return (
    <div>
      <button onClick={decrement}>DECREASE</button>
      <button onClick={increment}>INCREASE</button>
      <button onClick={triggerRerender}>RERENDER</button>
      <br />
      <br />
      <h2>Current Number: {number}</h2>
      <h2>Previous Number: {prevNumber}</h2>
    </div>
  );
}

export default UsePrevious;
