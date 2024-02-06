import React from "react";
import { useState} from "react";
import Input from "../../components/Input/Input";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShema } from "../../validationShema";
import { UserContext } from "../../context/UserInfoContext";
import { useContext } from "react";
import { useSelector, useDispatch} from "react-redux";
import Header from "../../components/Header/Header";
import "./OrderNew.css";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import {addUser} from "../../redux/slice/preperingSlise"


const OrderNew = () => {

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
    formState: { errors },
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
    const {adress, name, tel, checkbox} = data
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
        quantity: item.qty,
        totalPrice: item.qty * item.unitPrice,
        unitPrice: item.unitPrice,
      };
      cartData.push(newCart);
    });
    console.log(newOrder);

    dispatch(addUser(newOrder));
    reset();
    setIsChecked(false)
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <Header />
      <h1>Ready to order? Let's go!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} label="First Name" placeholder="Name" />
            )}
          />
        </div>
        {errors.name && <p className="errors">{errors.name.message}</p>}

        <div className="input-container">
          <Controller
            name="tel"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Phone number"
                placeholder="+38067777777"
              />
            )}
          />
        </div>
        {errors.tel && <p className="errors">{errors.tel.message}</p>}
        <div className="input-container">
          <Controller
            name="adress"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="m.Kyiv, vul. Stecenko 17, ap 250"
                label="Address"
              />
            )}
          />
        </div>
        {errors.adress && <p className="errors">{errors.adress.message}</p>}
        <div className="check-box">
        <Controller
            name="checkbox"
            control={control}
            render={({ field }) => (
          <CheckBox
          {...field}
          onChange={(e) => {
            field.onChange(e);
            handleCheckboxChange(e);
          }}
          checked={isChecked}
          />
          )}
          />
        </div>
        <Button buttonText="ORDER NOW FOR" totalSum={totalSum} val='$'/>
      </form>
    </div>
  );
};

export default OrderNew;
