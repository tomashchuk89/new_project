import React from "react";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import "./OrderId.css";
import Button from "../../components/Button/Button";

const OrderId = () => {
  const { users } = useSelector((state) => state.user);
  const price = 8;
  const { cart, priority, id, status, estimatedDelivery } = users[0].data.data;
  console.log("con", cart);
  const items = useSelector((state) => state.cart.items);
  const totalSum = items.reduce(
    (acc, item) => acc + item.unitPrice * item.qty,
    0
  );
  const totalSumDel = totalSum + (priority ? price : 0);
  const currentDate = new Date();
  const deliveryDate = new Date(currentDate.getTime() / 60000);
  const estimatedDeliveryDate = new Date(estimatedDelivery);
  const estimatedDeliveryDates = new Date(
    estimatedDeliveryDate.getTime() / 60000
  );
  const formatDeliveryDateTime = format(
    estimatedDeliveryDate,
    "MMM dd, hh:mm a"
  );
  const riz = estimatedDeliveryDates - deliveryDate;

  return (
    <>
      <Header />
      <div className="header-status">
        <h2 className="header-name">
          Order #{id} <span className="status-name">status: {status}</span>
        </h2>
        <div>
          {priority ? (
            <Button className="btn-priority" buttonText="priority" />
          ) : (
            ""
          )}
          <Button className="btn-status" buttonText="order" val={status} />
        </div>
      </div>
      <div className="delivery-date">
        <p>Only {riz} minutes left</p>
        <p className="delivery-time">
          (Estimated delivery {formatDeliveryDateTime})
        </p>
      </div>

      <ul className="main-cart">
        {cart.map((item) => (
          <li key={item.id}>
            <div className="order-menu">
              <div>
                <div className="name-in">
                  <p className="name-main">
                    {" "}
                    <span className="amount-name">{item.quantity} x</span>
                    {item.name}{" "}
                  </p>
                  {item.addIngredients && (
                    <span className="ingredients">
                      {item.addIngredients.join(", ")}
                    </span>
                  )}
                </div>
              </div>
              <p className="price">$ {item.totalPrice}.00</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="price-block">
        <p className="">Price pizza: $ {totalSum}</p>
        {priority ? <div>Price priority: $ {price} </div> : ""}
        <p> To pay on delivery: $ {totalSumDel}</p>
      </div>
      <div className="btn-block-prioritize">
        {priority ? (
          ""
        ) : (
          <Button className="btn-prioritize" buttonText="prioritize" />
        )}
      </div>
    </>
  );
};

export default OrderId;
