import { IDevice } from 'interfaces/IDevice';
import React from 'react';
import { Button } from 'sharedStyledComponents/atoms/Button';
import { Headline } from 'sharedStyledComponents/atoms/Headlines';
import { Paragraph } from 'sharedStyledComponents/atoms/Paragraph';
import BorrowedInfo from './components/BorrowedInfo';
import DeviceImage from './components/DeviceImage';
import { StyledDevice } from './StyledDevice';

interface IProps {
  device: IDevice;
}

const Device = ({ device }: IProps) => {
  const { borrowed, image, model, os, osVersion, vendor } = device;

  return (
    <StyledDevice>
      {/* device main image */}
      <DeviceImage src={image} alt={model} />

      {/* device info */}
      <Headline as='h4' className='device-name'>
        {model}
      </Headline>
      <Paragraph className='device-manufacturer'>Manufacturer: {vendor}</Paragraph>
      <Paragraph className='device-os'>
        Operation system: {os} - {osVersion}
      </Paragraph>

      {/* device actions */}
      {!borrowed ? <Button>Půjčit</Button> : <BorrowedInfo borrowedInfo={borrowed} />}
    </StyledDevice>
  );
};

export default Device;
