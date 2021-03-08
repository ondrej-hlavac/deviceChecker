import React from 'react';
import { Button } from 'sharedStyledComponents/atoms/Button';
import { H3 } from 'sharedStyledComponents/atoms/Headlines';
import { Input } from 'sharedStyledComponents/atoms/Input';
import { NarrowContainer } from 'sharedStyledComponents/wrappers/NarrowContainer';
import { StyledFormWrapper } from 'sharedStyledComponents/wrappers/StyledFormWrapper';

const Login = () => {
  return (
    <NarrowContainer>
      <StyledFormWrapper>
        <H3>Log in</H3>
        <Input />
        <Input />
        <Button>Submit</Button>
      </StyledFormWrapper>
    </NarrowContainer>
  );
};

export default Login;
