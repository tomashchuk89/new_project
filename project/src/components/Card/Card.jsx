import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  const { name, unitPrice, imageUrl, ingredients, soldOut } = data;

  return (
    <div>
      <div className="conteiner">
        <div className="img">
          <img className="image" src={imageUrl} alt="{name}" style={{ filter: soldOut ? 'grayscale(100%)' : 'none' }}  />
          
        </div>
        <div className="context">
          <p className="text" style={{ fontWeight: soldOut ? '300' : '600' }}>{name}</p>
          <ul className="ingredient">
            {ingredients.map((ingredient, index) => (
              <li className="item" key={index} style={{ fontWeight: soldOut ? '300' : '600' }}>
                {ingredient}
                {index < ingredients.length - 1 && ", "}
              </li>
            ))}
          </ul>
          <p className="price" style={{ fontWeight: soldOut ? '300' : '600' }}> $ {unitPrice}</p>
        </div>
        <div className="btn-conteiner">
            { (soldOut) ? '' : <button className="btn">ADD TO CART</button> }
        </div>
      </div>
    </div>
  );
};

export default Card;
