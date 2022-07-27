/* eslint-disable import/extensions */
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCurrencyList } from './redux/currencySlice';

function App() {
  const dispatch = useDispatch();
  const currencyState = useSelector((state) => state.currency);

  useEffect(() => {
    if (currencyState.status === 'idle') {
      dispatch(fetchCurrencyList());
    }
  }, [
    dispatch,
    currencyState.status,
  ]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
