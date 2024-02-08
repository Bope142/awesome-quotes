import React, { useEffect } from "react";
import "./assets/styles/main.style.scss";
import MainView from "./container/mainView/MainView";
import Tabbar from "./components/tabbar/Tabbar";
function App() {
  useEffect(() => {
    if (!localStorage.getItem("categoryQuote")) {
      localStorage.setItem("categoryQuote", "god");
    }
  }, []);

  return (
    <div className="App__container">
      <MainView />
      <Tabbar />
    </div>
  );
}

export default App;
