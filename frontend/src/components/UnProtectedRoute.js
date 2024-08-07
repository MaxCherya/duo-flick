import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authService from '../services/authService';

const UnProtectedRoute = () => {
  const currentUser = authService.getCurrentUser();
  return currentUser ? <Navigate to='/menu' /> : <Outlet />;
};

export default UnProtectedRoute;
