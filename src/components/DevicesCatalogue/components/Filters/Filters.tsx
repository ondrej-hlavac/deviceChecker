import { IFiltersOptions } from 'interfaces/Filters';
import React from 'react';
import { Checkbox } from 'sharedStyledComponents/atoms/Checkbox';
import { Select } from 'sharedStyledComponents/atoms/Select';
import { StyledFilters } from './StyledFilters';

interface IProps {
  filtersOptions: IFiltersOptions;
  setFilters: (keyValue: any) => void;
}

const Filters = ({ filtersOptions, setFilters }: IProps) => {
  const { os, vendor } = filtersOptions;

  return (
    <StyledFilters>
      {/* OS select */}
      <span>Systém</span>
      <Select onChange={e => setFilters({ os: e.target.value })}>
        <option value='' hidden>
          Nezáleží
        </option>
        {os.map((system: string) => (
          <option value={system} key={system}>
            {system}
          </option>
        ))}
      </Select>

      {/* Vendor select */}
      <span>Výrobce</span>
      <Select onChange={e => setFilters({ vendor: e.target.value })}>
        <option value='' hidden>
          Nezáleží
        </option>
        {vendor.map((manufacturer: string) => (
          <option value={manufacturer} key={manufacturer}>
            {manufacturer}
          </option>
        ))}
      </Select>

      {/* borrowed checkbox */}
      <div>
        <Checkbox id='stock' onChange={e => setFilters({ onStock: e.target.checked })} />
        <label htmlFor='stock'>Skladem</label>
      </div>
    </StyledFilters>
  );
};

export default Filters;
