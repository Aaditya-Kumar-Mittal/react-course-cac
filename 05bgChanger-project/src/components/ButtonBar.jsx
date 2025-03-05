import React from "react";
import MyButton from "./MyButton";

function ButtonBar() {
  return (
    <div className="flex flex-wrap gap-4 p-5 justify-center bg-gray-100 min-h-screen">
      <MyButton color="red" />
      <MyButton color="blue" />
      <MyButton color="green" />
      <MyButton color="yellow" />
      <MyButton color="purple" />
      <MyButton color="pink" />
      <MyButton color="orange" />
      <MyButton color="teal" />
      <MyButton color="cyan" />
      <MyButton color="lime" />
      <MyButton color="indigo" />
      <MyButton color="amber" />
    </div>
  );
}

export default ButtonBar;
