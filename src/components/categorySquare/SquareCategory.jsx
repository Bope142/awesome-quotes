import React from "react";
import "./style.scss";

function SquareCategory({ title }) {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    const otherSquareCategories =
      document.querySelectorAll(".square__category");
    otherSquareCategories.forEach((squareCategory) => {
      squareCategory.classList.remove("select-category");
    });
    setIsActive(!isActive);
  };

  return (
    <div
      className={`square__category ${isActive ? "select-category" : ""}`}
      onClick={handleClick}
    >
      <p>{title}</p>
    </div>
  );
}

export default SquareCategory;
