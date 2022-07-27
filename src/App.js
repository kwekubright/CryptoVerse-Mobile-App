/* eslint-disable import/extensions */
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar';
import { fetchCurrencyList } from './redux/currencySlice';

function App() {
  const dispatch = useDispatch();
  const currencyState = useSelector((state) => state.currency);
  const pageName = useSelector((state) => state.pageName);

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
      <NavBar page={pageName.pageName} />
      <Outlet />
    </>
  );
}

export default App;
