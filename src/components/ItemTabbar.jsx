import React from "react";
import "../assets/styles/components/item.tab.scss";
import { Link } from "react-router-dom";
const eventClickHandler = (indexComponentClassList) => {
  document
    .querySelectorAll(".active_tab")
    .forEach((item) => item.classList.replace("active_tab", "inactive_tab"));
  document
    .querySelectorAll(".tab__item")
    [indexComponentClassList].classList.replace("inactive_tab", "active_tab");
};
export default function ItemTabbar(props) {
  return (
    <Link
      to={props.pathLink}
      className="tab__item"
      onClick={(e) => {
        eventClickHandler(props.indexClassList);
      }}
    >
      <div className="icons__tab_item">
        <props.icons></props.icons>
      </div>
      <p className="tab__title"> {props.titleTab}</p>
    </Link>
  );
}
