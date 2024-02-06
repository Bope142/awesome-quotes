import React from "react";
import "./style.scss";
function Button({ idBtn, Icons, handleEvent }) {
  return (
    <button className="btn" id={idBtn} onClick={handleEvent}>
      {Icons}
    </button>
  );
}

export default Button;
