import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { sessionSelectors } from 'redux/session';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
export const NotMobile = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const MobileRoute = ({ redirectTo }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(sessionSelectors.getIsAuth);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile && isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  );
};

export default MobileRoute;
