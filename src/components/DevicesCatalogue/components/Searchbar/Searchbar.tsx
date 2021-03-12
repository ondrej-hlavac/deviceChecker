import React from 'react';
import { StyledSearchbar } from './StyledSearchbar';

interface IProps {
  handleSearchChange: (searchQuery: string) => void;
}

const Searchbar = ({ handleSearchChange }: IProps) => {
  return <StyledSearchbar onChange={e => handleSearchChange(e.target.value)} />;
};

export default Searchbar;
