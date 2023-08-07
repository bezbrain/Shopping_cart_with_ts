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
        const newItems = state.cartArr.filter(
          (each) => each.id !== action.payload
        );

        state.cartArr = newItems;
        return;
      }
      newCount.count = newCount.count - 1;
    },

    removeItem: (state, action) => {
      const newItems = state.cartArr.filter(
        (each) => each.id !== action.payload
      );

      state.cartArr = newItems;
    },
  },
});

console.log(cartSlice);

export const { increaseCount, decreaseCount, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
