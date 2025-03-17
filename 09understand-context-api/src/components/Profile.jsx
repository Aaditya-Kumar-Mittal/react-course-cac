import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-white bg-opacity-40 backdrop-blur-md shadow-lg rounded-2xl p-6 w-96">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Profile
      </h2>
      {user ? (
        <>
          <p className="text-lg text-gray-800">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="text-lg text-gray-800">
            <strong>Password:</strong> {user.password}
          </p>
        </>
      ) : (
        <p className="text-lg text-gray-600 italic">No user logged in.</p>
      )}
    </div>
  );
}

export default Profile;
