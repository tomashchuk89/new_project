import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './slice/cartSlise'
import menuReduser from './slice/menuSlise'


export const store = configureStore({
  reducer: {
    cart: cartReduser,
    menu: menuReduser
    }
});
