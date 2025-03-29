import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {

  const [username, setUsername] = useState("")
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-blue-500">
        This is Home Page.
      </h1>

      <input className="border-2 border-slate-400 rounded-md px-2 py-4 m-5" type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />

      <button className="bg-blue-600 px-2 py-4 rounded-md text-white m-5 hover:bg-blue hover:font-bold" onClick={() => navigate("/dashboard/profile", { state: { username } })}>Go to Profile</button>
    </div>
  );
}

export default HomePage;
