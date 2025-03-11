/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  /*
  // State to store GitHub profile data
  const [data, setData] = useState(null);

  // Fetch GitHub user data when component mounts
  useEffect(() => {
    fetch("https://api.github.com/users/Aaditya-Kumar-Mittal")
      .then((response) => response.json()) // Properly parse JSON
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  */

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-300 w-80 text-center">
        <h1 className="text-2xl font-semibold text-orange-600">
          GitHub Profile
        </h1>
        {data ? (
          <>
            <img
              src={data.avatar_url}
              alt="GitHub Avatar"
              className="w-32 h-32 rounded-full mx-auto mt-4 border-4 border-orange-500"
            />
            <h2 className="text-xl font-medium text-slate-800 mt-2">
              {data.name}
            </h2>
            <p className="text-gray-700">Followers: {data.followers}</p>
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            >
              Visit Profile
            </a>
          </>
        ) : (
          <p className="text-gray-600 mt-4">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Github;

// Async function to fetch GitHub profile data
export const gitHubInfoLoader = async function () {
  const response = await fetch(
    "https://api.github.com/users/Aaditya-Kumar-Mittal"
  );
  return await response.json();
};
