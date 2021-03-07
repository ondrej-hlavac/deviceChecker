import DevicesCatalogue from 'components/DevicesCatalogue/DevicesCatalogue';
import React from 'react';
import { StyledPageWrapper } from 'sharedStyledComponents/wrappers/StyledPageWrapper';

const DevicesPage = () => {
  return (
    <StyledPageWrapper>
      <DevicesCatalogue />
    </StyledPageWrapper>
  );
};

export default DevicesPage;
