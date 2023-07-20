import React from "react";
import "../assets/styles/components/category.card.scss";
// import { useNavigate } from "react-router-dom";

const eventHandlerClick = (event, changeEvent) => {
  // console.log(event.target.textContent);
  // console.log(window.location);
  document
    .querySelectorAll(".selected_category")
    .forEach((card) => card.classList.remove("selected_category"));
  event.target.classList.add("selected_category");
  changeEvent(event.target.textContent);
  // navigate("/" + event.target.textContent, {
  //   state: { id: 1, name: "sabaoon" },
  // });
};
export default function CategoryQuotes(props) {
  // const navigate = useNavigate();
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
