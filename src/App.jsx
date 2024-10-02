import React from "react";
import "./App.css";
import HoverComp from "./components/HoverComp";

function App() {
  return (
    <div className="flex gap-5 justify-center items-center h-screen">
      <HoverComp src="port.png" y={65} txt="Portfolio" />
      <HoverComp src="editr.png" y={75} txt="EditR" />
    </div>
  );
}

export default App;
