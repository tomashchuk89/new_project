import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './slice/cartSlise'


export const store = configureStore({
  reducer: {
    cart: cartReduser
  },
});
