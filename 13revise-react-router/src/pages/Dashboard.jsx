import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 text-center">
        This is Dashboard.
      </h1>
      <nav className="w-1/4 flex justify-center items-center font-bold text-white p-5 my-5 mx-auto gap-4 bg-red-500 rounded-md">
        <Link to={"profile"}>Profile</Link>
        <Link to={"settings"}>Settings</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default Dashboard;
