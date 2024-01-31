import React from "react";
import "./style.scss";
function Button({ idBtn, Icons }) {
  return (
    <button className="btn" id={idBtn}>
      {Icons}
    </button>
  );
}

export default Button;
