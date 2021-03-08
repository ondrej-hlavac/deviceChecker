import React from 'react';
import { Button } from 'sharedStyledComponents/atoms/Button';
import { H3 } from 'sharedStyledComponents/atoms/Headlines';
import { Input } from 'sharedStyledComponents/atoms/Input';
import { Select } from 'sharedStyledComponents/atoms/Select';
import { NarrowContainer } from 'sharedStyledComponents/wrappers/NarrowContainer';
import { StyledFormWrapper } from 'sharedStyledComponents/wrappers/StyledFormWrapper';

const CreateDevice = () => {
  return (
    <NarrowContainer>
      <StyledFormWrapper>
        <H3>Nové zařízení</H3>
        <Input />
        <Input />
        <Input />
        <Select>
          <option value="bla">bla</option>
          <option value="bla">bla</option>
          <option value="bla">bla</option>
          <option value="bla">bla</option>
        </Select>
        <Button>Přidat zařízení</Button>
      </StyledFormWrapper>
    </NarrowContainer>
  );
};

export default CreateDevice;
