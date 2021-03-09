import styled from 'styled-components';

export const StyledFilters = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`