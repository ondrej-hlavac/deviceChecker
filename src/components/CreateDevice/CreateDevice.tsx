import { routes } from 'constants/routes';
import React from 'react';
import { Button } from 'sharedStyledComponents/atoms/Button';
import { Headline } from 'sharedStyledComponents/atoms/Headlines';
import { LinkText } from 'sharedStyledComponents/atoms/LinkText';
import { Select } from 'sharedStyledComponents/atoms/Select';
import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import { NarrowContainer } from 'sharedStyledComponents/wrappers/StyledNarrowContainer';
import { StyledFormWrapper } from 'sharedStyledComponents/wrappers/StyledFormWrapper';
import Input from 'components/Input';

const CreateDevice = () => {
  return (
    <NarrowContainer>
      <LinkText to={routes.HOME}>zpět na seznam zařízení</LinkText>
      <StyledFormWrapper>
        <Headline as="h1" color={StyledVariables.COLOR_ORANGE}>
          Nové zařízení
        </Headline>
        <Input label="text" id="text" />
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
