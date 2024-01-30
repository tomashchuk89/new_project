import React from 'react'
import "./ButtonOrder.css";

const ButtonOrder = ({totalSum}) => {
  return (
    <>
         <button className="btn-order-now" type="submit">
          ORDER NOW FOR {totalSum} $
        </button>
    </>
  )
}

export default ButtonOrder