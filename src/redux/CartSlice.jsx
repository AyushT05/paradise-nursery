import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
    },

    removeItem: (state, action) => {
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
      }

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;

      const item = state.cartItems.find(
        (item) => item.id === id
      );

      if (item) {
        item.quantity += amount;

        state.totalQuantity += amount;

        if (item.quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== id
          );
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;