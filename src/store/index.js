import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import itemsSlice from "./reducers/itemsSlice";
/* import adminReducer from "./reducers/adminSlice"; */

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsSlice,
    /* admin: adminReducer, */
  },
});
