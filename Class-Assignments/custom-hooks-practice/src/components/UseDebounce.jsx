import React from "react";
import useDebounce from "../hooks/useDebounce";
import { useState } from "react";
import { useEffect } from "react";

function UseDebounce() {
  const [inputVal, setInputVal] = useState("");
  const deBounceValue = useDebounce(inputVal, 300);

  function callBackend() {
    // request backend for data
    console.log("Debounced search...");
  }

  useEffect(() => {
    callBackend();
  }, [deBounceValue]);

  return <input type="text" onChange={(e) => setInputVal(e.target.value)} />;
}

export default UseDebounce;
