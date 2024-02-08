import React from "react";
import "./style.scss";

function SquareCategory({ title }) {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = (catTitle) => {
    const otherSquareCategories =
      document.querySelectorAll(".square__category");
    otherSquareCategories.forEach((squareCategory) => {
      squareCategory.classList.remove("select-category");
      squareCategory.classList.remove("default-select");
    });
    setIsActive(!isActive);
    if (!isActive) {
      localStorage.setItem("categoryQuote", catTitle);
    }
  };

  return (
    <div
      className={`square__category ${isActive ? "select-category" : ""} ${
        localStorage.getItem("categoryQuote") === title ? "default-select " : ""
      }`}
      onClick={() => handleClick(title)}
    >
      <p>{title}</p>
    </div>
  );
}

export default SquareCategory;
