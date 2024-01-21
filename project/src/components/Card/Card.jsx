import React from "react";
import { useDispatch } from "react-redux";
import {addToCart} from '../../redux/slice/cartSlise'
import "./Card.css";

const Card = ({ data }) => {
  const { name, unitPrice, imageUrl, ingredients, soldOut } = data;
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart(data))
    
  }

  return (
    <div>
      <div className="conteiner">
        <div className="img">
          <img
            className="image"
            src={imageUrl}
            alt="{name}"
            style={{ filter: soldOut ? "grayscale(100%)" : "none" }}
          />
        </div>
        <div className="context">
          <p className="text" style={{ fontWeight: soldOut ? "300" : "600" }}>
            {name}
          </p>
          <p
            className="ingredient"
            style={{ fontWeight: soldOut ? "300" : "600" }}
          >
            {ingredients.join(", ")}
          </p>
          <p className="price">{soldOut ? "SOLD OUT" : `$ ${unitPrice}`} </p>
        </div>
        <div className="btn-conteiner">
          {soldOut ? "" : <button  onClick={handleAddToCart} className="btn">ADD TO CART</button>}
        </div>
      </div>
    </div>
  );
};

export default Card;
