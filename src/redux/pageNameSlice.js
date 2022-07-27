/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageName: 'Home',
};

const pageNameSlice = createSlice({
  name: 'pageName',
  initialState,
  reducers: {
    setPageName: (state, action) => {
      state.pageName = action.payload;
    },
  },
});

export const { setPageName } = pageNameSlice.actions;
export default pageNameSlice.reducer;
