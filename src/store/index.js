import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import itemsSlice from "./reducers/itemsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsSlice,
  },
});
