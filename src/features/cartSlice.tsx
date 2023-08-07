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
      if (newCount.count === 0) {
        newCount.count = 0;
        return;
      }
      newCount.count = newCount.count - 1;
    },
  },
});

console.log(cartSlice);

export const { increaseCount, decreaseCount } = cartSlice.actions;

export default cartSlice.reducer;
