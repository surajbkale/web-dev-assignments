import { useState } from "react";

function App() {

  return (
    <div>
      <div style={{background: "#dfe6e9", height: "100vh"}}>
        <ToggleMessage/>
        <ToggleMessage/>
        <ToggleMessage/>
      </div>
    </div>
  );
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  console.log("Re-render");
  function toggle() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered</p>}
    </div>
  );
};

export default App;
