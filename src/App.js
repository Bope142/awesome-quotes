import React from "react";
import "./assets/styles/main.style/main.scss";
import MainView from "./parts/main";
import Tabbar from "./parts/tabbar";
class App extends React.Component {
  state = {
    currentCategory: "money",
  };
  changeCategory = (category) => {
    this.setState({ current_category: category });
  };

  render() {
    return (
      <div className="App container__app">
        <MainView
          category={this.state.current_category}
          onDataChange={this.changeCategory}
        />
        <Tabbar category={this.state.current_category} />
      </div>
    );
  }
}

export default App;
