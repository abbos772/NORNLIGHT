import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value.push({ ...action.payload, quantity: 1 });
      } else {
        state.value[index].quantity += 1;
      }
    },
    incrementCartQuantity: (state, action) => {
      const index = state.value.findIndex((el) => el.id === action.payload);
      if (index >= 0) {
        state.value[index].quantity += 1;
      }
    },
    decrementCart: (state, action) => {
      const index = state.value.findIndex((i) => i.id === action.payload);
      if (index >= 0 && state.value[index].quantity > 1) {
        state.value[index].quantity -= 1;
      } else {
        state.value = state.value.filter((i) => i.id !== action.payload);
      }
    },
    removeFromCart: (state, action) => {
      // Filter out the item with the given id
      const updatedCart = state.value.filter((i) => i.id !== action.payload);
      // Return the updated state
      return { ...state, value: updatedCart };
    },
    deleteAllCart: (state) => {
      state.value = [];
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementCartQuantity,
  decrementCart,
  deleteAllCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
