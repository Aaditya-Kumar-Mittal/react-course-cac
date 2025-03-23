import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";
function App() {
  return (
    <div>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo />
      <DisplayTodo />
    </div>
  );
}

export default App;
