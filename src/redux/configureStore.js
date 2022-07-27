import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './currencySlice';
import currencyDetailsSlice from './currencyDetailsSlice';
import pageNameSlice from './pageNameSlice';

const Store = () => configureStore({
  reducer: {
    currency: currencySlice,
    details: currencyDetailsSlice,
    pageName: pageNameSlice,
  },
});

export default Store;
