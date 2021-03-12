import { IDevice } from 'interfaces/IDevice';
import React from 'react';
import Device from './components/Device';
import { StyledDevicesList } from './StyledDevicesList';

interface IProps {
  devices: IDevice[];
}

const DevicesList = ({ devices }: IProps) => {
  if (!devices.length) return <span>žádný telefon nevyhovuje zvoleným filtrům</span>;

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
