import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backet: JSON.parse(localStorage.getItem("backet")) || [],
};

export const CreateBacketSlice = createSlice({
  name: "CREATE_BACKET",
  initialState,
  reducers: {
    createBacket(state, action) {
      const newProduct = { ...action.payload, quantity: 1 };
      state.backet = [...state.backet, newProduct];
      localStorage.setItem("backet", JSON.stringify(state.backet));
    },
    deletBacket(state, action) {
      let deleteFilter = state.backet.filter((el) => el.id !== action.payload);
      state.backet = deleteFilter;
      localStorage.setItem("backet", JSON.stringify(deleteFilter));
    },
    inCrement(state, action) {
      const plus = state.backet.map((el) =>
        el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el);
      state.backet = plus;
      localStorage.setItem("backet", JSON.stringify(plus));
    },
    desCrement(state, action) {
      const minus = state.backet.map((el) =>
        el.id === action.payload
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      state.backet = minus
      localStorage.setItem("backet", JSON.stringify(minus));
    },
    removeAll (state,action) {
      state.backet = []
      localStorage.removeItem("backet")
    }
  },
});
export const { createBacket, deletBacket, inCrement, desCrement,removeAll } =
  CreateBacketSlice.actions;
export default CreateBacketSlice.reducer;
