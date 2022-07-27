/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currencyList: [],
  status: 'idle',
  error: null,
};

export const fetchCurrencyList = createAsyncThunk(
  'currency/fetchCurrencyList',
  async () => {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false',
    );

    return response.data;
  },
);

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencyList: (state, action) => {
      state.currencyList = action.payload;
    },
  },
  extraReducers: {
    [fetchCurrencyList.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCurrencyList.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.currencyList = action.payload;
    },
    [fetchCurrencyList.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },
  },
});

export const { setCurrencyList } = currencySlice.actions;
export default currencySlice.reducer;
