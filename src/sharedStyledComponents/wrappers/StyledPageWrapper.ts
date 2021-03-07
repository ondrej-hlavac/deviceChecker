import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import styled from 'styled-components';

export const StyledPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${StyledVariables.HEADER_HEIGHT} 1em 3em;
  min-height: 100vh;
`;
