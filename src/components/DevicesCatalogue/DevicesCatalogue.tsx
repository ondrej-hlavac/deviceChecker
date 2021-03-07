import React from 'react';
import { StyledDevicesCatalogue } from './StyledDevicesCatalogue';
import DevicesList from './components/DevicesList';
import Filters from './components/Filters';
import Searchbar from './components/Searchbar';

const DevicesCatalogue = () => {
  return (
    <StyledDevicesCatalogue>
      <div className="row">
        <Filters />
        <Searchbar />
      </div>
      <DevicesList />
    </StyledDevicesCatalogue>
  );
};

export default DevicesCatalogue;
