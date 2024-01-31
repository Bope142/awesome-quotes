import React from "react";
import "./assets/styles/main.style.scss";
import MainView from "./container/mainView/MainView";
import Tabbar from "./components/tabbar/Tabbar";
function App() {
  return (
    <div className="App__container">
      <MainView />
      <Tabbar />
    </div>
  );
}

export default App;
