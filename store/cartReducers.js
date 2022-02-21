// 카트 정보 저장
import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cartId: [],
    cartItems: [],
    addCart: 0,
  },
  reducers: {
    addCartItem(state, action) {
      state.addCart = ++state.addCart;
      const newId = action.payload.cartId;
      const itemsChk = state.cartItems.find((item) => item.id === newId);

      if (!itemsChk) {
        const items = action.payload.cartItems;
        const existingItem = items.find((item) => item.id === newId);
        state.cartItems = [...state.cartItems, existingItem];
      }
    },
    deletCartItem(state, action) {
      const delItems = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== delItems);
    },
    reset(state) {
      state.cartItems = [];
    },
  },
});

export const cartActions = cart.actions;

export default cart.reducer;
