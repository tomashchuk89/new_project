import React from "react";
import { useState } from "react";
import Inputs from "../../components/Inputs/Inputs";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShema } from "../../validationShema";
import { UserContext } from "../../context/UserInfoContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import "./OrderNew.css";


const OrderNew = () => {
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
    },
    resolver: yupResolver(validationShema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
              <label className="label-name">
                {" "}
                First Name
                <Inputs {...field} placeholder="Name" />
              </label>
            )}
          />
        </div>
        {errors.name && <p className="errors">{errors.name.message}</p>}

        <div className="input-container">
          <Controller
            name="tel"
            control={control}
            render={({ field }) => (
              <label>
                {" "}
                Phone number
                <Inputs {...field} placeholder="+38067777777" />
              </label>
            )}
          />
        </div>
        {errors.tel && <p className="errors">{errors.tel.message}</p>}
        <div className="input-container">
          <Controller
            name="adress"
            control={control}
            render={({ field }) => (
              <label className="label-address">
                {" "}
                Address
                <Inputs
                  {...field}
                  placeholder="m.Kyiv, vul. Stecenko 17, ap 250"
                />
              </label>
            )}
          />
        </div>
        {errors.adress && <p className="errors">{errors.adress.message}</p>}
        <div className="check-box">
          <label>
            <input
              onChange={handleCheckboxChange}
              checked={isChecked}
              type="checkbox"
            />
            <span>Whan to yo give your order priority?</span>
          </label>
        </div>

        <button className="btn-order-now" type="submit">
          ORDER NOW FOR {totalSum} $
        </button>
      </form>
    </div>
  );
};

export default OrderNew;
