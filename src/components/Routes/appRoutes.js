import { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import DashboardPage from 'components/Pages/DashboardPage';
import AuthPage from 'components/Pages/AuthPage';

const MobileRoute = lazy(() => import('components/DeviceTypeControl'));
const TransactionsPage = lazy(() =>
  import('components/Pages/TransactionsPage')
);
const StatisticsPage = lazy(() => import('components/Pages/StatisticsPage'));
const ExchangeMobilePage = lazy(() =>
  import('components/Pages/ExchangeMobilePage')
);
const NotFoundPage = lazy(() => import('components/Pages/NotFoundPage'));
const ErrorPage = lazy(() => import('utils/ErrorPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<DashboardPage />} errorElement={<ErrorPage />}>
        <Route element={<PrivateRoute redirectDest="signup" />}>
          <Route
            index
            element={<TransactionsPage />}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route element={<PrivateRoute redirectDest="signup" />}>
          <Route
            path="statistics"
            element={<StatisticsPage />}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route
          element={<MobileRoute redirectTo="/" />}
          errorElement={<ErrorPage />}
        >
          <Route path="exchange" element={<ExchangeMobilePage />} />
        </Route>
      </Route>

      <Route element={<PublicRoute redirectDest="/" restricted />}>
        <Route
          path="/signin"
          element={<AuthPage />}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route element={<PublicRoute redirectDest="/" restricted />}>
        <Route
          path="/signup"
          element={<AuthPage forRegister />}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} errorElement={<ErrorPage />} />
    </Route>
  ),
  { basename: '/wallet-app' }
);

export default router;
