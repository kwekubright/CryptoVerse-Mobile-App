import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  it('renders without crashing', () => {
    const element = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(element).toBeTruthy();
  });
});
