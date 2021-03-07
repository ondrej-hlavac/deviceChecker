import React from 'react';
import { routes } from 'constants/routes';
import { StyledHomepageLink } from './StyledHomepageLink';

const HomepageLink = () => {
  return (
    <StyledHomepageLink to={routes.HOME}>Device Checker</StyledHomepageLink>
  );
};

export default HomepageLink;
