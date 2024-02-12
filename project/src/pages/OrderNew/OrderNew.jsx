import React from "react";
import { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShema } from "../../validationShema";
import { UserContext } from "../../context/UserInfoContext";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import "./OrderNew.css";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../redux/slice/preperingSlise";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

const OrderNew = () => {
  const { status, isLoading, isError, users } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const totalSum =
    items.reduce((acc, item) => acc + item.unitPrice * item.qty, 0) +
    (isChecked ? 8 : 0);
  const { names } = useContext(UserContext);
  const {
    handleSubmit,
    reset,
    control,
  } = useForm({
    defaultValues: {
      name: names,
      tel: "+380",
      adress: "",
      checkbox: false,
    },
    resolver: yupResolver(validationShema),
  });

  const onSubmit = (data) => {
    const { adress, name, tel, checkbox } = data;
    console.log(data)
    const cartData = [];
    const newOrder = {
      address: adress,
      cart: cartData,
      customer: name,
      phone: tel,
      position: "",
      priority: checkbox,
    };
    items.forEach((item) => {
      let newCart = {
        name: item.name,
        pizzaId: item.id,
        addIngredients: item.ingredients,
        quantity: item.qty,
        totalPrice: item.qty * item.unitPrice,
        unitPrice: item.unitPrice,
      };
      cartData.push(newCart);
    });
    dispatch(addUser(newOrder));
    reset();
    setIsChecked(false);
  };

  useEffect(() => {
    if (status === "success") {
      navigate("/order/:id", {
        state: {
          users,
        },
      });
    }
  }, [status, users, navigate]);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <h1>Ready to order? Let's go!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <Input
            control={control}
            name="name"
            label="First Name"
            message="Please enter a name"
          />
        </div>

        <div className="input-container">
          <Input
            control={control}
            name="tel"
            label="Phone number"
            message="Please enter a valid phone number"
          />
        </div>

        <div className="input-container">
          <Input
            control={control}
            name="adress"
            label="Address"
            message="The address is short, enter more than 8 characters"
          />
        </div>
        {errors.adress && <p className="errors">{errors.adress.message}</p>}
        <div className="check-box">
          <CheckBox
            control={control}
            name="checkbox"
            label="Whan to yo give your order priority?"
            onClick={setIsChecked}
          />
        </div>
        <Button
          className="btn-order-cart"
          buttonText="ORDER NOW FOR"
          totalSum={totalSum}
          val="$"
        />
      </form>
    </div>
  );
};

export default OrderNew;
