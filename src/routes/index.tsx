import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Dashboard = lazy(
  () =>
    import(/*webpackChunckName:"dashboard"*/ '../pages/Dashboard/Dashboard'),
);

const Repository = lazy(
  () =>
    import(
      /*webpackChunckName:"repository"*/
      /*webpackPrefetch:true */
      '../pages/Repository/Repository'
    ),
);

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: 'respository/:name/:repository',
    element: <Repository />,
  },
]);
