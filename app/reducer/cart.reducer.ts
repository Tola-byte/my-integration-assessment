import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "../../utils/data";

type CartItem = {
  image: string;
  title: string;
  linktitle?: string;
  price: number;
};

type CartItemWithQuantity = CartItem & { quantity: number };

type InitialState = {
  items: CartItemWithQuantity[];
};

const initialState: InitialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const itemToBeAdded = action.payload;

      const itemPresent = state.items.find(
        (item) => item.title === itemToBeAdded.title
      );

      if (!itemPresent) {
        state.items = [...state.items, { ...itemToBeAdded, quantity: 1 }];
      } else {
        itemPresent.quantity += 1;
      }
    },

    remove(state, action: PayloadAction<{ title: string }>) {
      const itemToRemove = state.items.find(
        (item) => item.title === action.payload.title
      );

      if (!itemToRemove) return;

      if (itemToRemove.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.title !== action.payload.title
        );
      } else {
        itemToRemove.quantity -= 1;
      }
    },
  },
});


export const { add, remove} = cartSlice.actions;

export default cartSlice.reducer;