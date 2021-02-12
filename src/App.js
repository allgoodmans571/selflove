import { useState, useContext } from "react";
import Loader from "react-loader-spinner";
import Context from "./context";
import SecondPage from "./component/SecondPage";
import StartPage from "./component/StartPage";
import ThirdPage from "./component/ThirdPage";
function App() {
  const [screen, setScreen] = useState(0);
  const screenArr = [<StartPage />, <SecondPage />, <ThirdPage />];

  function setActiveScreen(i) {
    setScreen(i);
  }

  return (
    <div>
      <Context.Provider value={{ setActiveScreen }}>
        {screenArr[screen]}
      </Context.Provider>
    </div>
  );
}

export default App;
