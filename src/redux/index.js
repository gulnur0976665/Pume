import { configureStore } from "@reduxjs/toolkit";
import CreatateProductSlice from "./createProductSlice";
import CreateBacketSlice  from "./createBacketSlicee";

export const store = configureStore({
  reducer: {
    main: CreatateProductSlice,
    bac: CreateBacketSlice
  },
});
