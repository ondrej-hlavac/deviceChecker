import React from 'react';
import { Checkbox } from 'sharedStyledComponents/atoms/Checkbox';
import { Select } from 'sharedStyledComponents/atoms/Select';
import { StyledFilters } from './StyledFilters';

const Filters = () => {
  return (
    <StyledFilters>
      <span>Systém</span>
      <Select>
        <option value="" hidden>
          Nezáleží
        </option>
        <option value="android">Android</option>
        <option value="ios">iOS</option>
        <option value="windows">Windows</option>
      </Select>
      <span>Výrobce</span>
      <Select>
        <option value="" hidden>
          Nezáleží
        </option>
        <option value="samsung">Samsung</option>
        <option value="apple">Apple</option>
        <option value="lenovo">Lenovo</option>
      </Select>
      <Checkbox />
    </StyledFilters>
  );
};

export default Filters;
