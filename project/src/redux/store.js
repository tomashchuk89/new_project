import { configureStore } from "@reduxjs/toolkit";

import cartReduser from './slice/cartSlise'
import menuReduser from './slice/menuSlise'
import userReducer from './slice/preperingSlise'


export const store = configureStore({
  reducer: {
    cart: cartReduser,
    menu: menuReduser,
    user: userReducer,

    }
});
