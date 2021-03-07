import React from 'react';
import { Button } from 'sharedStyledComponents/atoms/Button';
import { H2 } from 'sharedStyledComponents/atoms/Headlines';
import { Paragraph } from 'sharedStyledComponents/atoms/Paragraph';
import { StyledDevice } from './StyledDevice';

const Device = () => {
  return (
    <StyledDevice>
      <img className="device-image" src="" alt="phone image" />
      <H2 className="device-name">Phone name</H2>
      <Paragraph className="device-manufacturer">Manufacturer</Paragraph>
      <Paragraph className="device-os">Operation system</Paragraph>
      <Button>Půjčit</Button>
    </StyledDevice>
  );
};

export default Device;
