import React from "react";
import "../assets/styles/components/category.card.scss";

const eventHandlerClick = (event) => {
  console.log(event);
  document
    .querySelectorAll(".selected_category")
    .forEach((card) => card.classList.remove("selected_category"));
  event.target.classList.add("selected_category");
};
export default function CategoryQuotes(props) {
  return (
    <div
      className="category__card"
      onClick={(e) => {
        eventHandlerClick(e);
      }}
    >
      {props.titleCategory}
    </div>
  );
}
