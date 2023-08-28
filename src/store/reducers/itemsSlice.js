import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((_, idx) => idx !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
