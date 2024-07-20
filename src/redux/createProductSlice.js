import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  search: [],
  dark: JSON.parse(localStorage.getItem("dark")) || false,
};

export const CreatateProductSlice = createSlice({
  name: "CREATE_PRODUCT",
  initialState,
  reducers: {
    createProduct1(state, action) {
      state.product = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    deleteProduct(state, action) {
      let deleteFilter = state.product.filter((el) => el.id !== action.payload);
      state.product = deleteFilter;
      localStorage.setItem("product", JSON.stringify(deleteFilter));
    },

    searchProduct(state, action) {
      let filtersearch = state.product.filter((el) =>
        el.title.includes(action.payload.toUpperCase())
      );
      state.search = filtersearch;
    },
    darkMode(state, action) {
      let chanDark = !state.dark;
      state.dark = chanDark;
      localStorage.setItem("dark", JSON.stringify(chanDark));
    },
  },
});
export const { createProduct1, deleteProduct, searchProduct, darkMode } =
  CreatateProductSlice.actions;
export default CreatateProductSlice.reducer;
