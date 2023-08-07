import { createSlice } from "@reduxjs/toolkit";

interface State {
  cartArr: Array<any>;
  count: number;
  total: number;
}

const initialState: State = {
  cartArr: [],
  count: 1,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCount: (state) => {
      console.log(state);
    },
  },
});

console.log(cartSlice);

export default cartSlice.reducer;
