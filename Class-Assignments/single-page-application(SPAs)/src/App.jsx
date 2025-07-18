import { createContext, useContext, useState } from "react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";
const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <BulbContext.Provider
      value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <BulbProvider>
      <Light />
    </BulbProvider>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);

  return (
    <div>
      {bulbOn ? (
        <h3>
          <FaLightbulb />
        </h3>
      ) : (
        <h3>
          <FaRegLightbulb />
        </h3>
      )}
    </div>
  );
}

function LightSwitch() {
  const { setBulbOn } = useContext(BulbContext);

  function toggle() {
    setBulbOn((current) => !current);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle Bulb</button>
    </div>
  );
}

export default App;
