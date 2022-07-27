import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

describe('ItemCard', () => {
  it('renders without crashing', () => {
    const element = render(
      <BrowserRouter>
        <ItemCard />
      </BrowserRouter>,
    );
    expect(element).toBeTruthy();
  });
});
