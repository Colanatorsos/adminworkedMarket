import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const productKey = `${product.title}_${product.desc}_${product.price}_${product.url}`;

      if (state.products[productKey]) {
        state.products[productKey].quantity += 1;
      } else {
        state.products[productKey] = {
          ...product,
          quantity: 1,
        };
      }

      state.totalQuantity += 1;
    },
    clearCart: (state) => {
      state.products = {};
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
