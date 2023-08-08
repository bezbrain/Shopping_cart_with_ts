import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

interface State {
  cartArr: Array<any>;
  shoppingCount: number;
  total: number;
}

const initialState: State = {
  cartArr: data,
  shoppingCount: 0,
  total: 0,
};

// Function to handle remove item
const handleRemoveItem = (arr: Array<any>, action: number) => {
  return arr.filter((each) => each.id !== action);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      // console.log(action.payload);
      const newCount = state.cartArr.find((each) => each.id === action.payload);
      if (newCount.count === 10) {
        newCount.count = 10;
        return;
      }
      newCount.count = newCount.count + 1;
    },

    decreaseCount: (state, action) => {
      const newCount = state.cartArr.find((each) => each.id === action.payload);
      if (newCount.count === 1) {
        state.cartArr = handleRemoveItem(state.cartArr, action.payload);
        return;
      }
      newCount.count = newCount.count - 1;
    },

    removeItem: (state, action) => {
      state.cartArr = handleRemoveItem(state.cartArr, action.payload);
    },

    clearItems: (state) => {
      state.cartArr = [];
    },
  },
});

console.log(cartSlice);

export const { increaseCount, decreaseCount, removeItem, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
