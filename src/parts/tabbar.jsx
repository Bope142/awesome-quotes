import React from "react";
import "../assets/styles/parts.pages/tabbar.scss";
import ItemTabbar from "../components/ItemTabbar";
import { ReactComponent as quote_icons } from "../assets/icons/quote.svg";
import { ReactComponent as category_icons } from "../assets/icons/list_is_empty.svg";
import { ReactComponent as about_icons } from "../assets/icons/workspace.svg";

export default class Tabbar extends React.Component {
  componentDidMount() {
    if (window.location.pathname.search("category") === 1) {
      document.querySelectorAll(".tab__item")[0].classList.add("inactive_tab");
      document.querySelectorAll(".tab__item")[1].classList.add("active_tab");
      document.querySelectorAll(".tab__item")[2].classList.add("inactive_tab");
    } else if (window.location.pathname.search("about") === 1) {
      document.querySelectorAll(".tab__item")[0].classList.add("inactive_tab");
      document.querySelectorAll(".tab__item")[1].classList.add("inactive_tab");
      document.querySelectorAll(".tab__item")[2].classList.add("active_tab");
    } else {
      document.querySelectorAll(".tab__item")[0].classList.add("active_tab");
      document.querySelectorAll(".tab__item")[1].classList.add("inactive_tab");
      document.querySelectorAll(".tab__item")[2].classList.add("inactive_tab");
    }
  }
  render() {
    return (
      <div className="tabbar-controll">
        <ItemTabbar
          pathLink={"/"}
          icons={quote_icons}
          titleTab="Quotes"
          indexClassList={0}
        />
        <ItemTabbar
          pathLink={"/category/" + this.props.category}
          icons={category_icons}
          titleTab="Category"
          indexClassList={1}
        />
        <ItemTabbar
          pathLink="/about"
          icons={about_icons}
          titleTab="About"
          indexClassList={2}
        />
      </div>
    );
  }
}
