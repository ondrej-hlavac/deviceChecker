import React from 'react';
import { StyledGlobalStyles } from 'sharedStyledComponents/StyledGlobalStyles';
import Header from 'components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'constants/routes';

const App = () => {
  return (
    <>
      <StyledGlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path={routes.HOME}>
            <div>home</div>
          </Route>
        </Switch>
      </Router>
      {/* <Router>
        <TopMenu />
        <Switch>
          <Route path={routes.EXERCISE}>
            <Exercise />
          </Route>
        </Switch>
        <BottomNavigation />
      </Router> */}
    </>
  );
};

export default App;
