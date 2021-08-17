import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCoin = createAsyncThunk("coin/getCoin", async (id) => {
  const res = await axios(
    `https://api.coingecko.com/api/v3/coins/${id}?tickers=true`
  );
  return res.data;
});

export const coinSlice = createSlice({
  name: "coin",
  initialState: {
    items: [],
    itemsHistory: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchCoin.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCoin.fulfilled]: (state, action) => {
      state.items = [action.payload];
      state.status = "succeeded";
    },
    [fetchCoin.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
  },
});

export default coinSlice.reducer;
