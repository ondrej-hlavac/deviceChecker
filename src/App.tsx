import React from 'react';
import { StyledGlobalStyles } from 'sharedStyledComponents/StyledGlobalStyles';

const App = () => {
  return (
    <>
      <StyledGlobalStyles />
      <h1>hello</h1>
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
