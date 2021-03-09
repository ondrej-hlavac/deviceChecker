import styled from 'styled-components';
import { StyledVariables } from '../../sharedStyledComponents/StyledVariables';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${StyledVariables.HEADER_HEIGHT};
  color: ${StyledVariables.COLOR_WHITE};
  background-color: ${StyledVariables.COLOR_PURPLE};
  z-index: 2;
`;