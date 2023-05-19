'use client';

import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex((item) => item.name === action.payload.name);
      if (index >= 0) {
        state.items[index].quantity += 1;
        return;
      }
      state.items.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state.items[index].quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        if (state.items[index].quantity === 1) {
          return;
        }
        state.items[index].quantity -= 1;
      }
    },
    }
});

export const { addToCart, deleteItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;