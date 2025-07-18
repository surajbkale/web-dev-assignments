import React from "react";
import useIsOnline from "../hooks/useIsOnline";

function UseIsOnline() {
  const isOnline = useIsOnline();

  return (
    <div
      style={{
        backgroundColor: isOnline ? "lightgreen" : "#ff4d4d",
        color: "#fff",
        padding: "12px",
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: "4px",
        margin: "20px",
      }}
    >
      {isOnline ? "You are Online" : "You are offline"}
    </div>
  );
}

export default UseIsOnline;
