import React, { useEffect, useState } from 'react';
import { StyledDevicesCatalogue } from './StyledDevicesCatalogue';
import DevicesList from './components/DevicesList';
import Filters from './components/Filters';
import Searchbar from './components/Searchbar';
import { getPhones } from 'services/api/phones/getPhones';

const DevicesCatalogue = () => {
  const [devices, setDevices] = useState([]);

  const fetchPhones = async () => {
    const getDevicesResponse = await getPhones();
    setDevices(getDevicesResponse);
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  const filteredPhones = [...devices];

  return (
    <StyledDevicesCatalogue>
      {/* filters and searchbar */}
      <div className="filters_searchbar-wrapper">
        <Filters />
        <Searchbar />
      </div>

      {/* main devices list */}
      <DevicesList devices={filteredPhones} />
    </StyledDevicesCatalogue>
  );
};

export default DevicesCatalogue;
