import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Repository } from '../pages/Repository/Repository';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: 'respository',
    element: <Repository />,
  },
]);
