import styled from 'styled-components';

export const StyledDevicesCatalogue = styled.article`
  .filters_searchbar-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1em;

    @media screen and (min-width: 800px) {
      flex-direction: row;
    }
  }
`;