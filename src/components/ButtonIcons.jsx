import React from "react";
import "../assets/styles/components/button.style.scss";
export default function ButtonIcons(props) {
  return (
    <button className="btn">
      <props.icons></props.icons>
    </button>
  );
}
