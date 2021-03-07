import styled from 'styled-components';

export const StyledDevicesList = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1em;
  row-gap: 16px;

  @media screen and (min-width: 730px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
