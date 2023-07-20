import React from "react";
import "../assets/styles/components/button.style.scss";
export function ButtonIcons(props) {
  return (
    <button className="btn">
      <props.icons></props.icons>
    </button>
  );
}
export const ButtonIconsLink = (props) => {
  return (
    <a href={props.href} className="btn" target="__blank">
      <props.icons></props.icons>
    </a>
  );
};
