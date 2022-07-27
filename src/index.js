import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './redux/configureStore';
import './index.css';
import App from './App';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './pages/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = Store();
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id/:symbol" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
