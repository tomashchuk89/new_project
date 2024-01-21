import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteFromCart,
  decrementQty,
  incrementtQty,
} from "../../redux/slice/cartSlise";
import "./CartMenu.css";

const CartMenu = ({ item }) => {
  const dispatch = useDispatch();
  const hendleIncriment = () => {
    dispatch(incrementtQty({ id: item.id }));
  };
  const hendleDecrement = () => {
    dispatch(decrementQty({ id: item.id }));
  };
  const hendleDelete = () => {
    dispatch(deleteFromCart({ id: item.id }));
  };

  return (
    <>
      <div className="main-cart-menu">
        <div>
          <p className="name">
            {" "}
            <span className="amount-name">{item.qty} x</span>
            {item.name}{" "}
          </p>
        </div>

        <div className="descrip-cart-menu">
          <p className="price">$ {item.unitPrice * item.qty}.00</p>
          <button className="btn-i-d" onClick={hendleDecrement}>
            {" "}
            -{" "}
          </button>

          <span className="amount">{item.qty}</span>
          <button className="btn-i-d" onClick={hendleIncriment}>
            {" "}
            +{" "}
          </button>

          <button className="btn-delete" onClick={hendleDelete}>
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default CartMenu;
