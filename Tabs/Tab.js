import React from "react";

function Tab({ label, index, onChange, value }) {
  const activeStyle = {
    listStyle: "none",
    background: "rgba(154,76,255,1)",
    color: "rgb(255, 255, 255)",
    borderRadius: "15px",
    padding: "5px 25px"
  };
  const inActiveStyle = {
    listStyle: "none",
    background: "rgba(247,249,248,1)",
    color: "rgba(117,112,128,1)",
    borderRadius: "15px",
    padding: "5px 25px"
  };
  return (
    <li
      style={value === index ? activeStyle : inActiveStyle}
      onClick={() => onChange(index)}
    >
      {label}
    </li>
  );
}

export default Tab;
