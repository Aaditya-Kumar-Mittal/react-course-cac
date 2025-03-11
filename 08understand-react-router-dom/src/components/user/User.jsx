import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-300">
        <h2 className="text-2xl font-semibold text-orange-600">User Profile</h2>
        <p className="text-gray-700 mt-2">
          <span className="font-medium text-slate-800">User ID:</span> {userid}
        </p>
      </div>
    </div>
  );
}

export default User;
