import "./assets/styles/main.style/main.scss";
import MainView from "./parts/main";
import Tabbar from "./parts/tabbar";
function App() {
  return (
    <div className="App container__app">
      <MainView />
      <Tabbar />
    </div>
  );
}

export default App;
