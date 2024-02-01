import React from "react";
import "./Button.css";

const Button = (props) => {
  const { buttonText, totalSum, val } = props;
  return (
    <>
         <button className="btn-order-now" type="submit">
         {buttonText} {totalSum} {val}
        </button>
    </>
  );
};

export default Button;
