import React from "react";
import Card from "../../components/Card/Card";
import { useEffect } from "react";
import "./Menu.css";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../redux/slice/menuSlise";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const Menu = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, menuItems } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />
      {isError && <h1>ERROR</h1>}

      {!!menuItems &&
        menuItems.map((pizza) => <Card key={pizza.id} data={pizza} />)}
    </>
  );
};

export default Menu;
