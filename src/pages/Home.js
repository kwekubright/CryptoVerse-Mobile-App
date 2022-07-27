import React from 'react';
import { Container, Form } from 'react-bootstrap';
import HomeChart from '../components/HomeChart';
import Items from '../components/Items';
import './Home.css';

const Home = () => (
  <Container className="page-body">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Search" className="rounded-5" />
      </Form.Group>
    </Form>
    <HomeChart />
    <Items />
  </Container>
);

export default Home;
