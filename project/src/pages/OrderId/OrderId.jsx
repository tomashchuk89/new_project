import React from 'react'
import Header from '../../components/Header/Header';
import { UserContext } from "../../context/UserInfoContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./OrderId.css";


const OrderId = () => {
  const {isChecked, name, tel, address } = useParams();
  console.log(isChecked, name, tel, address )
    const items = useSelector((state) => state.cart.items);
    const totalSum =
    items.reduce((acc, item) => acc + item.unitPrice * item.qty, 0) +
    (isChecked ? 8 : 0);
   
    const { names } = useContext(UserContext);
 
  return (
    <>
      <Header />

      <h2>Order, {names} </h2>

      <ul className="main-cart">
        {items.map((item) => (
          <li key={item.id}>
            <div className="order-menu">
              <p className="name">
                {" "}
                <span className="amount-name">{item.qty} x</span>
                {item.name}{" "}
              </p>
              <p className="price">$ {item.unitPrice * item.qty}.00</p>
            </div>
          </li>
        ))}
      </ul>
      <div>
        Prise pizza: $ {totalSum} <br />
        To pay on delivery: $ {totalSum}
      </div>
      <button>priorytySum</button>
    </>
  );
}

export default OrderId