import HTMLReactParser from 'html-react-parser';
import _ from 'lodash';
import { Alert, Container, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import HomeChart from '../components/HomeChart';
import './Details.css';
import NavBar from '../components/NavBar';

const Details = () => {
  const itemId = window.location.pathname.split('/')[2];
  const itemSymbol = window.location.pathname.split('/')[3];

  const currencies = useSelector((state) => state.currency.currencyList);
  const details = currencies.filter((currency) => currency.id === itemId)[0];

  return (
    <>
      <NavBar page={details.name} />
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
              {HTMLReactParser(
                _.truncate(
                  details.description !== undefined
                    ? details.description.en
                    : '',
                  {
                    length: 400,
                    separator: ' ',
                    omission: '...',
                  },
                ),
              )}
            </Card.Text>
            <Card.Text>
              <Alert variant="info">
                Market Cap:
                {' '}
                {`$${
                  details.market_cap !== undefined ? details.market_cap : 'N/A'
                }`}
              </Alert>
              <Alert variant="info">
                Circulating Suply:
                {' '}
                {`${
                  details.circulating_supply !== undefined
                    ? details.circulating_supply
                    : 'N/A'
                }`}
              </Alert>
              <Alert variant="info">
                Current Price:
                {' '}
                {`$${
                  details.current_price !== undefined
                    ? details.current_price
                    : 'N/A'
                }`}
              </Alert>
              <Alert variant="info">
                Market Rank:
                {' '}
                {`${
                  details.market_cap_rank !== undefined
                    ? details.market_cap_rank
                    : 'N/A'
                }`}
              </Alert>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Details;
