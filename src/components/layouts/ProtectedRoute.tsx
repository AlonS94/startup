import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStores } from 'store/StoreProvider';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useStores();

  const isAuth = user.isAuth;
  return isAuth ? children : <Navigate to="/auth/login" />;
};
