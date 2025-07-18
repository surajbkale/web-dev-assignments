import { useState } from "react";
import "./App.css";
import { usePostTitle, useFetch, useFetch2 } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";
import { useDebounce, useDebounce2 } from "./hooks/useDebounce";
import { useEffect } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce2(inputVal, 300);

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    console.log("Expensive Operation");
  }, [debouncedValue]);

  return (
    <>
      <input type="text" onChange={change} />
    </>
  );
}

export default App;
