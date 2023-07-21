import React from "react";
import "./assets/styles/main.style/main.scss";
import MainView from "./parts/main";
import Tabbar from "./parts/tabbar";
class App extends React.Component {
  state = {
    currentCategory: "money",
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category });
  };

  render() {
    return (
      <div className="App container__app">
        <MainView
          category={this.state.currentCategory}
          onDataChange={this.changeCategory}
        />
        <Tabbar category={this.state.currentCategory} />
      </div>
    );
  }
}

export default App;
