import React from 'react'
import "./ButtonOrder.css";

const ButtonOrder = ( props) => {
  const { buttonText, totalSum } = props;
  return (
    <>
         <button className="btn-order-now" type="submit">
         {buttonText} {totalSum} 
        </button>
    </>
  )
}

export default ButtonOrder