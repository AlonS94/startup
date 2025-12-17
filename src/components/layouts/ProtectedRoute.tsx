import React from 'react';
import { Navigate } from 'react-router-dom';

import { getIsAuth } from 'utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuth = JSON.parse(getIsAuth());

  return isAuth ? children : <Navigate to="/auth/login" />;
};
