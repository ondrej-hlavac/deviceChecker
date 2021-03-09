import React from 'react';
import { StyledDevicesCatalogue } from './StyledDevicesCatalogue';
import DevicesList from './components/DevicesList';
import Filters from './components/Filters';
import Searchbar from './components/Searchbar';

const DevicesCatalogue = () => {
  return (
    <StyledDevicesCatalogue>
      {/* filters and searchbar */}
      <div className="filters_searchbar-wrapper">
        <Filters />
        <Searchbar />
      </div>

      {/* main devices list */}
      <DevicesList />
    </StyledDevicesCatalogue>
  );
};

export default DevicesCatalogue;
