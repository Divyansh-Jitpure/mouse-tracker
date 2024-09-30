import React from "react";
import "./App.css";
import CursorTracker from "./CursorTracker";

function App() {
  return (
    <div className="flex gap-3">
      <div className="bg-slate-400 h-[300px] w-[400px] group">
        <h2 className="text-center text-2xl font-bold">Portfolio</h2>
        <div className="group-hover:block hidden">
          <CursorTracker src="port.png" prevSize={300} yOffset={150} />
        </div>
      </div>
      <div className="bg-slate-400 h-[300px] w-[400px] group">
        <h2 className="text-center text-2xl font-bold">EditR</h2>
        <div className="group-hover:block hidden">
          <CursorTracker src="editr.png" prevSize={300} yOffset={180} />
        </div>
      </div>
    </div>
  );
}

export default App;
