import React from "react";
import "../assets/styles/components/category.card.scss";

const eventHandlerClick = (event, changeEvent) => {
  document
    .querySelectorAll(".selected_category")
    .forEach((card) => card.classList.remove("selected_category"));
  event.target.classList.add("selected_category");
  changeEvent(event.target.textContent);
};
export default function CategoryQuotes(props) {
  return (
    <div
      className="category__card"
      onClick={(e) => {
        eventHandlerClick(e, props.changeEvent);
      }}
    >
      {props.titleCategory}
    </div>
  );
}
