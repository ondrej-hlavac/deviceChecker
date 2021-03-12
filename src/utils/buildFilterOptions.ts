import { IDevice } from 'interfaces/IDevice';
import { IFiltersOptions } from 'interfaces/Filters';

export const buildFilterOptions = (devices: IDevice[]): IFiltersOptions => {
  const os = [];
  const vendor = [];

  // get filters options from devices array
  for(const device of devices) {
    os.push(device.os);
    vendor.push(device.vendor);
  }

  // return options without duplicates
  return {
    os: [...new Set(os)],
    vendor: [...new Set(vendor)]
  }
}