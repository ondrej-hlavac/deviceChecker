import React from 'react';
import Device from './components/Device';
import { StyledDevicesList } from './StyledDevicesList';

interface IProps {
  devices: any[];
}

const DevicesList = ({ devices }: IProps) => {
  console.log(
    '🚀 ~ file: DevicesList.tsx ~ line 10 ~ DevicesList ~ devices',
    devices
  );
  return (
    <StyledDevicesList>
      {devices &&
        devices.map((device: any) => {
          const { id } = device;
          return <Device key={id} device={device} />;
        })}
    </StyledDevicesList>
  );
};

export default DevicesList;
