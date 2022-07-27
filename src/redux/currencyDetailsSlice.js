/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currencyDetails: [],
  isLoading: false,
  error: null,
};

export const fetchCurrencyDetails = createAsyncThunk(
  'currencyDetails/fetchCurrencyDetails',
  async (currency) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${currency}`);
    return response.data;
  },
);

const currencyDetailsSlice = createSlice({
  name: 'currencyDetails',
  initialState,
  reducers: {
    setCurrencyDetails: (state, action) => {
      state.currencyDetails = action.payload;
    },
  },
  extraReducers: {
    [fetchCurrencyDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCurrencyDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currencyDetails = action.payload;
    },
    [fetchCurrencyDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const { setCurrencyDetails } = currencyDetailsSlice.actions;
export default currencyDetailsSlice.reducer;
