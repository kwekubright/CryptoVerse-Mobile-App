import { PropTypes } from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import './ItemCard.css';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const ItemCard = (props) => {
  const { item } = props;

  return (
    <Col xs={6} sm={6} md={4} lg={3} className="p-1">
      <Link to={`/details/${item.id}/${item.symbol}`} className="text-decoration-none">
        <Card className="item-card rounded">
          <Card.Body>
            <Row className="d-flex justify-content-start align-items-start p-0">
              <Col xs={3} sm={12} md={12} lg={12} className="m-0 p-0">
                <Card.Img variant="top" src={item.image} />
              </Col>
              <Col xs={8} sm={12} md={12} lg={12} className="m-0 p-2">
                <Card.Title className="p-0 m-0">
                  {_.upperCase(item.symbol)}
                </Card.Title>
                <div className="d-flex gap-1 item-meta justify-content-start">
                  <span>{`$${_.round(item.current_price, 2)}`}</span>
                  <span>
                    {' '}
                    {`${_.round(item.price_change_percentage_24h, 2)}%`}
                  </span>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

ItemCard.defaultProps = {
  item: {
    symbol: '',
    image: '',
    currentPrice: 0,
    priceChangePercentage24h: 0,
  },
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    symbol: PropTypes.string,
    current_price: PropTypes.number,
    image: PropTypes.string,
    price_change_percentage_24h: PropTypes.number,
  }),
};

export default ItemCard;
