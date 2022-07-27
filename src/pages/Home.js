import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import HomeChart from '../components/HomeChart';
import Items from '../components/Items';
import './Home.css';
import NavBar from '../components/NavBar';
import { fetchCurrencyList, setCurrencyList } from '../redux/currencySlice';

const Home = () => {
  const currencies = useSelector((state) => state.currency.currencyList);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.currentTarget.value;
    if (search !== '') {
      // search the list of currencies for the search term
      const filteredCurrencies = currencies.filter(
        (currency) => currency.symbol
          .toLowerCase()
          .includes(search.toLowerCase())
          || currency.name.toLowerCase().includes(search.toLowerCase()),
      );
      // if there are no results, display a message
      if (filteredCurrencies.length === 0) {
        dispatch(setCurrencyList([{}]));
      }
      // if there are results, display them
      dispatch(setCurrencyList(filteredCurrencies));
    } else {
      dispatch(fetchCurrencyList());
    }
  };

  return (
    <>
      <NavBar page="Home" />
      <Container className="page-body">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search" className="rounded-5" onChange={(e) => handleSearch(e)} />
          </Form.Group>
        </Form>
        <HomeChart />
        <Items />
      </Container>
    </>
  );
};

export default Home;
