import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGraphic = createAsyncThunk(
  "graphic/getGraphic",
  async (id) => {
    const res = await axios(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
    );
    return res.data;
  }
);

export const graphicSlice = createSlice({
  name: "graphic",
  initialState: {
    items: [],
    itemsHistory: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchGraphic.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchGraphic.fulfilled]: (state, action) => {
      state.items = [action.payload];
      state.status = "succeeded";
    },
    [fetchGraphic.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
  },
});

export default graphicSlice.reducer;
