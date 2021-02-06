import React from "react";
import "./index.css";

const Square = (props) => {
  return (
    <div>
      <button className="Square" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};

export default Square;
