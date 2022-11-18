import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { sessionSelectors } from 'redux/session';

export default function PrivateRoute({ redirectDest = 'login' }) {
  const location = useLocation();
  const isLoggedIn = useSelector(sessionSelectors.getIsAuth);

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={redirectDest} state={{ from: location }} replace /> //* save state=from to return user after refresh to this location in PublicRoute
  );
}
