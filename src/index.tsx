import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { routers } from './routes';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<></>}>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
