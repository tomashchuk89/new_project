import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartMenu from "../../components/CartMenu/CartMenu";
import Header from "../../components/Header/Header";
import { clearCart } from "../../redux/slice/cartSlise";
import { UserContext } from "../../context/UserInfoContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";


const Cart = () => {
  const navigate = useNavigate();
  const { names } = useContext(UserContext);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleBackMenu = (e) => {
    e.preventDefault();
    navigate("/menu");
  };
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleOrderCart =(e) => {
    e.preventDefault();
    // const soldOutCount = items.reduce((item, accumulator) => Object.values(item.soldOut) + accumulator, 0); 
   
    // console.log(soldOutCount)
    navigate("/order/new/");
  }

  return (
    <>
      <Header />
      <div className="back-menu">
        <button className="btn-back" onClick={handleBackMenu}>
          <span className="namee-btn-back">Back to menu</span>
        </button>
        <h2>You cart, {names} </h2>
      </div>
      <ul className="main-cart">
        {items.map((item) => (
          <li key={item.id}>
            <CartMenu item={item} />
          </li>
        ))}
      </ul>
      
      <div className="btn-order-clear">
        <button
          className="btn-order"
          onClick={handleOrderCart}
        >
          ORDER PIZZAS
        </button>
        <button className="btn-clear" onClick={handleClearCart}>
          CLEAR CART
        </button>
      </div>
    </>
  );
};

export default Cart;
