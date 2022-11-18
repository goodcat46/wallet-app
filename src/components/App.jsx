import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { authOperation, sessionSelectors } from 'redux/session';

import routes from 'components/Routes/appRoutes';

export const App = () => {
  const dispatch = useDispatch();

  const authToken = useSelector(sessionSelectors.getAuthToken);

  useEffect(() => {
    if (authToken) {
      dispatch(authOperation.refreshThunk());
      return;
    }
  }, [dispatch, authToken]);

  return <RouterProvider router={routes} />;
};
