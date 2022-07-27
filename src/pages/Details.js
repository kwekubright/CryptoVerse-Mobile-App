import HTMLReactParser from 'html-react-parser';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { Alert, Container, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import HomeChart from '../components/HomeChart';
import { fetchCurrencyDetails } from '../redux/currencyDetailsSlice';
import './Details.css';

const Details = () => {
  const itemId = window.location.pathname.split('/')[2];
  const itemSymbol = window.location.pathname.split('/')[3];
  const dispatch = useDispatch();

  const details = useSelector((state) => state.details.currencyDetails);
  console.log(details);

  useEffect(() => {
    dispatch(fetchCurrencyDetails(itemId));
  }, []);

  return (
    <Container className="page-body">
      <HomeChart itemId={itemSymbol} />
      <Alert variant="primary" className="d-flex w-auto">
        Market Ranking:
        {' '}
        {details.market_cap_rank}
      </Alert>
      <Card className="details-card border-0 p-0 m-0">
        <Card.Body>
          <Card.Title className="h1">{details.name}</Card.Title>
          <Card.Text className="">
            {HTMLReactParser(_.truncate(details.description !== undefined ? details.description.en : '', {
              length: 400,
              separator: ' ',
              omission: '...',
            }))}
          </Card.Text>
          <Card.Text>
            <Alert variant="info">
              Current Price:
              {' '}
              {`$${details.market_data !== undefined ? details.market_data.current_price.usd : 'N/A'}`}
            </Alert>
            <Alert variant="info">
              Price Change 24h:
              {' '}
              {`${details.market_data !== undefined ? details.market_data.price_change_percentage_24h : 'N/A'}%`}
            </Alert>
            <Alert variant="info">
              Price Change 7d:
              {' '}
              {`${details.market_data !== undefined ? details.market_data.price_change_percentage_7d : 'N/A'}%`}
            </Alert>
            <Alert variant="info">
              Price Change 30d:
              {' '}
              {`${details.market_data !== undefined ? details.market_data.price_change_percentage_30d : 'N/A'}%`}
            </Alert>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Details;
