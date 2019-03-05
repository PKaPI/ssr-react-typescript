import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import "@babel/polyfill";

hydrate(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.querySelector('.app-container') as HTMLElement,
);
