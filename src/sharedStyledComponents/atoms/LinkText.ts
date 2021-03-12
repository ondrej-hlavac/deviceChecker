import { Link } from 'react-router-dom';
import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import styled from 'styled-components';

export const LinkText = styled(Link)`
  display: inline-block;
  color: ${StyledVariables.COLOR_PURPLE};

  &:hover,
  &:active {
    color: ${StyledVariables.COLOR_ORANGE};
  }
`;
