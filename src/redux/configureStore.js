import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './currencySlice';
import currencyDetailsSlice from './currencyDetailsSlice';

const Store = () => configureStore({
  reducer: {
    currency: currencySlice,
    details: currencyDetailsSlice,
  },
});

export default Store;
