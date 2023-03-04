import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCrypto = createAsyncThunk("crypto/getCrypto", async () => {
  const res = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbinancecoin%2Cripple%2Ccardano%2Cmatic-network%2Cdogecoin%2Csolana%2Cpolkadot%2Clitecoin%2Ctron%2Cavalanche-2%2Cuniswap%2Cchainlink%2Ccosmos%2Cethereum-classic&order=market_cap_desc&per_page=100&page=1&sparkline=false");
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
