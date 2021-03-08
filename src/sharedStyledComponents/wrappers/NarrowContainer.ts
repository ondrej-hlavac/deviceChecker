import styled from 'styled-components';

export const NarrowContainer = styled.article`
  display: flex;
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 540px) {
    width: 500px;
  }
`;