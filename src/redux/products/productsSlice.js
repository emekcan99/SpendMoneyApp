import { createSlice } from "@reduxjs/toolkit";
import items from "../../products";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    totalPrice: 418000000000,
    items: items,
  },
  reducers: {
    buyProduct: (state, action) => {
      const id = action.payload.id;

      const findItem = state.items.find((item) => item.id === id);

      if (state.totalPrice > findItem.price) {
        findItem.count += 1;

        state.totalPrice = state.totalPrice - findItem.price;
      }
    },
    sellProduct: (state, action) => {
      const id = action.payload.id;
      const findItem = state.items.find((item) => item.id === id);
      if (findItem.count > 0) {
        findItem.count -= 1;
        state.totalPrice = state.totalPrice + findItem.price;
      }
    },
  },
});

export const { buyProduct, sellProduct } = productsSlice.actions;

export default productsSlice.reducer;
