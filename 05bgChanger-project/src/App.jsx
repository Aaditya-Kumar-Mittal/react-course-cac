import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap gap-4 p-5 justify-center items-center bg-slate-900 w-3/4 rounded-xl shadow-xl">
        <button
          className="bg-red-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-red-700"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-blue-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-blue-700"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="bg-green-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-green-700"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-violet-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-violet-700"
          onClick={() => setColor("violet")}
        >
          Violet
        </button>
        <button
          className="bg-yellow-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-yellow-700"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-orange-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-orange-700"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          className="bg-pink-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-pink-700"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="bg-indigo-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-indigo-700"
          onClick={() => setColor("indigo")}
        >
          Indigo
        </button>
        <button
          className="bg-lime-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-lime-700"
          onClick={() => setColor("lime")}
        >
          Lime
        </button>
        <button
          className="bg-rose-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-rose-700"
          onClick={() => setColor("rose")}
        >
          Rose
        </button>
        <button
          className="bg-amber-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-amber-700"
          onClick={() => setColor("#ffc107")}
        >
          Amber
        </button>
        <button
          className="bg-cyan-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-cyan-700"
          onClick={() => setColor("cyan")}
        >
          Cyan
        </button>
        <button
          className="bg-fuchsia-500 outline-none p-2 text-white border-2 border-white rounded-xl hover:bg-fuchsia-700"
          onClick={() => setColor("fuchsia")}
        >
          Fuchsia
        </button>
      </div>
    </div>
  );
}

export default App;
