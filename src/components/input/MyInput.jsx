import React from "react";
import "./input.css";
const MyInput = (props) => {
  const {
    type = "text",
    variant = "small",
    placeholder = "......",
    ...rest
  } = props;
  return (
    <input
      type={`${type}`}
      className={`default ${variant} {...rest}`}
      placeholder={`${placeholder}`}
    >
      
    </input>
  );
};

export default MyInput;
