import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'constants/routes';
import Header from 'components/Header';
import DevicesPage from 'pages/DevicesPage';
import LogInPage from 'pages/LogInPage';
import CreateDevicePage from 'pages/CreateDevicePage';
import ProtectedRoute from 'router/ProtectedRoute';

const MainRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={routes.LOG_IN}>
          <LogInPage />
        </Route>
        <ProtectedRoute path={routes.CREATE_DEVICE} onlyAdmin>
          <CreateDevicePage />
        </ProtectedRoute>
        <ProtectedRoute path={routes.HOME}>
          <DevicesPage />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default MainRouter;
