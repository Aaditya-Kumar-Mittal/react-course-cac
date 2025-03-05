import React from "react";

const colorMap = {
  red: "bg-red-500 hover:bg-red-700",
  blue: "bg-blue-500 hover:bg-blue-700",
  green: "bg-green-500 hover:bg-green-700",
  yellow: "bg-yellow-500 hover:bg-yellow-700",
  purple: "bg-purple-500 hover:bg-purple-700",
  pink: "bg-pink-500 hover:bg-pink-700",
  orange: "bg-orange-500 hover:bg-orange-700",
  teal: "bg-teal-500 hover:bg-teal-700",
  cyan: "bg-cyan-500 hover:bg-cyan-700",
  lime: "bg-lime-500 hover:bg-lime-700",
  indigo: "bg-indigo-500 hover:bg-indigo-700",
  amber: "bg-amber-500 hover:bg-amber-700",
};

function MyButton({ color }) {
  const bgColor = colorMap[color] || "bg-gray-500 hover:bg-gray-700"; // Default if color not found

  return (
    <button className={`${bgColor} text-white font-bold py-2 px-4 rounded shadow-lg transition-all`}>
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
}

export default MyButton;
