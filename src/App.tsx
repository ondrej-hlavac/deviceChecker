import React from 'react';
import { StyledGlobalStyles } from 'sharedStyledComponents/StyledGlobalStyles';
import ContextProvider from 'context/ContextProvider';
import MainRouter from 'router/Router';

const App = () => {
  return (
    <ContextProvider>
      <StyledGlobalStyles />
      <MainRouter />
    </ContextProvider>
  );
};

export default App;
