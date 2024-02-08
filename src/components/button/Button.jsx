import React from "react";
import "./style.scss";
function Button({ idBtn, Icons, handleEvent }) {
  return (
    <button className="btn" id={idBtn} onClick={handleEvent}>
      {Icons}
    </button>
  );
}

export const ButtonLink = ({ href, Icons, title }) => {
  return (
    <a href={href} className="btn btn-link" title={title}>
      {Icons}
    </a>
  );
};

export default Button;
