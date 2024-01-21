import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlise = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);
      if (item) {
        item.qty = item.qty + 1;
      } else {
        state.items.push({ ...payload, qty: 1 });
      }
    },
    deleteFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
    },
    decrementQty: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);
      if (item.qty <= 1) {
        state.items = state.items.filter((item) => item.id !== payload.id);
      }
      item.qty -= 1;
    },
    incrementtQty: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);

      item.qty += 1;
    },
    clearCart: (state, actions) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decrementQty,
  incrementtQty,
  clearCart,
} = cartSlise.actions;
export default cartSlise.reducer;
