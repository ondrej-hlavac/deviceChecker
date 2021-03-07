import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'constants/routes';
import { StyledGlobalStyles } from 'sharedStyledComponents/StyledGlobalStyles';
import Header from 'components/Header';
import DevicesPage from 'pages/DevicesPage';
import LogInPage from 'pages/LogInPage';
import CreateDevicePage from 'pages/CreateDevicePage';

const App = () => {
  return (
    <div>
      <StyledGlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path={routes.LOG_IN}>
            <LogInPage />
          </Route>
          <Route path={routes.CREATE_DEVICE}>
            <CreateDevicePage />
          </Route>
          <Route path={routes.HOME}>
            <DevicesPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
