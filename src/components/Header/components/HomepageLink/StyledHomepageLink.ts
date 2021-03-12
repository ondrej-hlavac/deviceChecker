import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { StyledVariables } from 'sharedStyledComponents/StyledVariables';

export const StyledHomepageLink = styled(RouterLink)`
  position: relative;
  display: flex;
  margin: 0 auto;
  padding-left: 16px;
  width: 200px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  font: ${StyledVariables.FONT_HEADLINE};
  // overwrite font size -> custom size
  font-size: 32px;
  color: ${StyledVariables.COLOR_WHITE};
  text-decoration: none;
  white-space: pre-wrap;
`;
