import React from 'react';
import Device from './components/Device';
import { StyledDevicesList } from './StyledDevicesList';

const DevicesList = () => {
  return (
    <StyledDevicesList>
      <Device />
      <Device />
      <Device />
      <Device />
      <Device />
      <Device />
    </StyledDevicesList>
  );
};

export default DevicesList;
