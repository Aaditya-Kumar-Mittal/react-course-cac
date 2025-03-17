import React from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Context API Example
        </h1>
        <div className="space-y-6">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
