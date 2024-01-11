import { useState } from "react";
import { createContext } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

export const DataContext = createContext();

function App() {
  const [app, setApp] = useState("Menu");
  const [score, setScore] = useState(0)

  return (
    <div className="h-screen w-screen flex flex-col justify-center content-center">
      <div>
        <div className="h-20 p-4 text-center text-4xl font-bold">
          Quiz Application
        </div>
      </div>
      <DataContext.Provider value={{app, setApp, score, setScore}}>
        <div>
          {app === "Menu" && <Menu />}
          {app === "Quiz" && <Quiz />}
          {app === "Score" && <Score />}
        </div>
      </DataContext.Provider>
    </div>
  );
}

export default App;
