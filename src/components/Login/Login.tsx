import React, { useState } from 'react';
import { Button } from 'sharedStyledComponents/atoms/Button';
import { Headline } from 'sharedStyledComponents/atoms/Headlines';
import { NarrowContainer } from 'sharedStyledComponents/wrappers/StyledNarrowContainer';
import { StyledFormWrapper } from 'sharedStyledComponents/wrappers/StyledFormWrapper';
import Input from 'components/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('submit email', email, password);
  };

  return (
    <NarrowContainer>
      <StyledFormWrapper>
        <Headline as="h1">Log in</Headline>

        {/* Log In form */}
        <form onSubmit={handleSubmit}>
          <Input
            label="Email:"
            id="email"
            type="email"
            placeholder="your@email.com"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password:"
            id="pass"
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </form>
      </StyledFormWrapper>
    </NarrowContainer>
  );
};

export default Login;
