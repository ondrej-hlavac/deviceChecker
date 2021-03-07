import React from 'react';
import HomepageLink from './components/HomepageLink';
import Navigation from './components/Navigation';
import { StyledHeader } from './StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <HomepageLink />
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
