import React from "react";
import Card from "../../components/Card/Card";
import { useState, useEffect} from "react";
import "./Menu.css";
import Header from "../../components/Header/Header";

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
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
    getPizzas();
  }, []);

  return (
    <>
    <Header/>

      {pizzas.map((pizza) => (
        <Card key={pizza.id} data={pizza} />
      ))}
    </>
  );
};

export default Menu;
