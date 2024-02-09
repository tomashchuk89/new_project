import React from "react";
import "./Button.css";

const Button = (props) => {
  const { buttonText, totalSum, val, onClick, className } = props;
  return (
    <>
         <button className={`btn ${className}`} type="submit" onClick={onClick}>
         {buttonText} {totalSum} {val}
        </button>
    </>
  );
};

export default Button;
