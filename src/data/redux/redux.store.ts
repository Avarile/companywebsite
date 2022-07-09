import { configureStore } from "@reduxjs/toolkit";
import universalReduxSlice from "./universal.reduxSlice";

// import all slices

// end of slices

export const store = configureStore({
  reducer: {
    universal: universalReduxSlice
  },
});
