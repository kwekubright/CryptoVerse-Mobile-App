import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';

const Items = () => {
  const currencies = useSelector((state) => state.currency.currencyList);

  return (
    <Container className="items-container">
      <Row className="items-row">
        {
          currencies.map((currency) => (
            <ItemCard key={currency.id} item={currency} />
          ))
        }
      </Row>
    </Container>
  );
};

export default Items;
