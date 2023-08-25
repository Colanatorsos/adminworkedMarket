import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
/* import adminReducer from "./reducers/adminSlice"; */

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    /* admin: adminReducer, */
  },
});
