import React, { useEffect, useMemo, useState } from 'react';
import { StyledDevicesCatalogue } from './StyledDevicesCatalogue';
import DevicesList from './components/DevicesList';
import Filters from './components/Filters';
import Searchbar from './components/Searchbar';
import { getPhones } from 'services/api/phones/getPhones';
import { buildFilterOptions } from 'utils/buildFilterOptions';
import { IDevice } from 'interfaces/IDevice';
import { IFilters } from 'interfaces/Filters';

const DevicesCatalogue = () => {
  const [devices, setDevices] = useState([] as IDevice[]);
  const [filters, setFilters] = useState({} as IFilters);
  const [searchQuery, setSearchQuery] = useState('');
  console.log('🚀 ~ file: DevicesCatalogue.tsx ~ line 13 ~ DevicesCatalogue ~ filters', filters);

  // get all devices and save them in state
  const fetchPhones = async () => {
    const getDevicesResponse: IDevice[] = await getPhones();
    setDevices(getDevicesResponse);
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  // build filters options from devices properties
  const filtersOptions = useMemo(() => buildFilterOptions([...devices]), [devices]);

  // update filters
  const updateSelectedFilters = (selected: { [key: string]: string }) => {
    const oldFilters = { ...filters };
    setFilters({ ...oldFilters, ...selected });
  };

  // update search query
  const handleSearchChange = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  // main filter
  const filteredPhones: () => IDevice[] = () => {
    const allDevices = [...devices];

    // if there is no filters, just return all devices
    if (Object.keys(filters).length === 0) {
      return allDevices;
    }

    // filter products on stock
    const stockProducts = allDevices.filter((device: IDevice) => {
      if (!filters.onStock) return true;
      return !(device && device.borrowed);
    });

    // filter products by os
    const osProducts = stockProducts.filter((device: IDevice) => {
      if (!filters.os) return true;
      return device.os === filters.os;
    });

    // filter products by vendor
    const vendorProducts = osProducts.filter((device: IDevice) => {
      if (!filters.vendor) return true;
      return device.vendor === filters.vendor;
    });

    return vendorProducts;
  };

  const searchedProductsByName = (devices: IDevice[]) => {
    if (!searchQuery) return devices;
    return devices.filter((device: IDevice) => {
      const { model } = device;
      return model.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  return (
    <StyledDevicesCatalogue>
      {/* filters and searchbar */}
      <div className='filters_searchbar-wrapper'>
        <Filters filtersOptions={filtersOptions} setFilters={updateSelectedFilters} />
        <Searchbar handleSearchChange={handleSearchChange} />
      </div>

      {/* main devices list */}
      <DevicesList devices={searchedProductsByName(filteredPhones())} />
    </StyledDevicesCatalogue>
  );
};

export default DevicesCatalogue;
