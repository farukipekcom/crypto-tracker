import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCrypto = createAsyncThunk("crypto/getCrypto", async () => {
  const res = await axios("https://api.coingecko.com/api/v3/coins");
  return res.data;
});

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    items: [],
    itemsHistory: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchCrypto.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCrypto.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.status = "succeeded";
    },
    [fetchCrypto.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
  },
});

export default cryptoSlice.reducer;
