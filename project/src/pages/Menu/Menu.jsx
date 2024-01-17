import React from "react";
import Card from "../../components/Card/Card";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserInfoContext";
import "./Menu.css";

const Menu = () => {
  const { names } = useContext(UserContext);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const { data } = await res.json();
        setPizzas(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="header-bg">
        <h2 className="login-name">User Name: {names} </h2>
      </div>

      {pizzas.map((pizza) => (
        <Card key={pizza.id} data={pizza} />
      ))}
    </>
  );
};

export default Menu;
