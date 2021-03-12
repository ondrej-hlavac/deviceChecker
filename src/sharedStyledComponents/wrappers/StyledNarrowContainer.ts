import styled from 'styled-components';

export const NarrowContainer = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: auto;
  width: 100%;

  @media screen and (min-width: 540px) {
    width: 500px;
  }
`;
