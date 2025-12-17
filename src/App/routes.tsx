import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from 'components/layouts/MainLayout/MainLayout';
import { AuthLayout } from 'components/layouts/AuthLayout/AuthLayout';

import { Login } from 'modules/Login/containers/Login/Login';
import { Registration } from 'modules/Registration/containers/Registration/Registration';
import { MainPage } from 'modules/MainPage/MainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'profile', element: <MainLayout /> },
    ],
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'registration', element: <Registration /> },
    ],
  },
]);
