import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";

export default function Score() {
  const { setApp, score, setScore } = useContext(DataContext);

  return (
    <div className="mt-10 flex justify-center">
      <div className="min-w-[300px] sm:max-w-sm p-6  flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow">
        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Total Score
        </div>
        <div className="mt-5 mb-2 text-6xl font-bold tracking-tight text-gray-900">
          {score}
        </div>
        <div className="mt-5">
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => {
              setApp("Menu");
              setScore(0);
            }}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
