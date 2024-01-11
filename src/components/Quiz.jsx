import React from "react";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../App";
import QuestionsData from "../QuestionsData";

export default function Quiz() {
  const { setApp, score, setScore } = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    function checkAns() {
      if (selected !== "") {
        if (selected == QuestionsData[index].answer) {
          setScore(score + 1);
          nextQuestion();
        }
        else {
            nextQuestion();
          }
      }
    }
    checkAns();
    console.log(score);
  }, [selected]);

  function nextQuestion() {
    setSelected("");
    if (index === QuestionsData.length - 1) {
      setApp("Score");
    } else {
      setIndex(i => i + 1);
    }
  }

  return (
    <div className="mt-10 flex justify-center">
      <div className="min-w-[300px] sm:max-w-sm p-6  flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow">
        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {QuestionsData[index].question}
        </div>
        <div className="mt-5 flex flex-col gap-5">
          <button
            className="inline-flex justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => {
              setSelected("A");
            }}
          >
            {QuestionsData[index].A}
          </button>
          <button
            className="inline-flex justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => {
              setSelected("B");
            }}
          >
            {QuestionsData[index].B}
          </button>
          <button
            className="inline-flex justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => {
              setSelected("C");
            }}
          >
            {QuestionsData[index].C}
          </button>
          <button
            className="inline-flex justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => {
              setSelected("D");
            }}
          >
            {QuestionsData[index].D}
          </button>
        </div>
        <div className="mt-5">
          <div>{`${index + 1} / 5`}</div>
        </div>
      </div>
    </div>
  );
}
