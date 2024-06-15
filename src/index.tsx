import React from 'react';
import ReactDOM from 'react-dom';
import { routers } from './routes';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={routers} />
  </React.StrictMode>,
  document.getElementById('root'),
);
