import React from "react";

const Input = (props) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="input"
    ></input>
  );
};

export default Input;
