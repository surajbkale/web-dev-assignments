import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("counter");

  useEffect(function () {
    setInterval(function () {
      setCount((count) => count + 1);
    }, 1000);
  }, []);



  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={incrementCount}>Increase Count</button> */}
    </div>
  );
}

export default App;
