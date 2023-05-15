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
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.items[index].quantity += action.payload.quantity;
        return;
      }
      state.items.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    }
});

export const { addToCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;