import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./coinSlice";
import cryptoSlice from "./cryptoSlice";
import graphicSlice from "./graphicSlice";
export const store = configureStore({
  reducer: {
    crypto: cryptoSlice,
    coin: coinSlice,
    graphic: graphicSlice,
  },
});
