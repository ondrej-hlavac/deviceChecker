import React from 'react';
import { Button } from 'sharedStyledComponents/atoms/Button';
import { Headline } from 'sharedStyledComponents/atoms/Headlines';
import { Paragraph } from 'sharedStyledComponents/atoms/Paragraph';
import { StyledDevice } from './StyledDevice';

const Device = () => {
  return (
    <StyledDevice>
      {/* device main image */}
      <img className="device-image" src="" alt="phone image" />

      {/* device info */}
      <Headline as="h1" className="device-name">
        Phone name
      </Headline>
      <Paragraph className="device-manufacturer">Manufacturer</Paragraph>
      <Paragraph className="device-os">Operation system</Paragraph>

      {/* device actions */}
      <Button>Půjčit</Button>
    </StyledDevice>
  );
};

export default Device;
