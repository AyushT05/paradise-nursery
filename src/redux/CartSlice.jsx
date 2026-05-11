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
      state.cartItems.push(action.payload);
      state.totalQuantity++;
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        item => item.id === action.payload
      );

      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        item => item.id === action.payload
      );

      if (item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;