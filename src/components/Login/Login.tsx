import React, { useContext, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Headline } from 'sharedStyledComponents/atoms/Headlines';
import { NarrowContainer } from 'sharedStyledComponents/wrappers/StyledNarrowContainer';
import { StyledFormWrapper } from 'sharedStyledComponents/wrappers/StyledFormWrapper';
import { SubmitButton } from 'sharedStyledComponents/atoms/SubmitButton';
import Input from 'components/Input';
import { routes } from 'constants/routes';
import { ILoginUser } from 'interfaces/ILoginUser';
import { loginUser } from 'services/api/user/loginUser';
import { Context as UserContext } from 'context/UserContext';
import { ILoginUserData } from 'interfaces/ILoginResponse';
// import useLocalStorage from 'hooks/useLocalStorage';

type submitEventType = React.FormEvent<HTMLFormElement>;

interface IProps extends RouteComponentProps<any> {}

const Login = (props: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const { addUser } = useContext(UserContext);
  // const { setItem: setUser } = useLocalStorage('user');

  // submit login form
  const handleSubmit = async (e: submitEventType) => {
    e.preventDefault();

    // login data
    const loginData: ILoginUser = {
      login: email,
      password,
    };

    // make ajax call
    const loginResponse: boolean | ILoginUserData = await loginUser(loginData);

    // handle login error
    if (!loginResponse) return setLoginError(true);

    // save user to localstorage
    // setUser(JSON.stringify(loginResponse));

    // save user to context
    addUser(loginResponse as ILoginUserData);

    // redirect after success
    props.history.push(routes.HOME);
  };

  return (
    <NarrowContainer>
      <StyledFormWrapper>
        <Headline as="h1">Log in</Headline>

        {/* Log In error alert */}
        {/* TODO: create form alert styled-component */}
        {loginError && (
          <span style={{ color: 'red' }}>
            Chyba přihlášení, zkontrolujte prosím přihlašovací údaje.
          </span>
        )}

        {/* Log In form */}
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* Email */}
          <Input
            label="Email:"
            id="email"
            type="email"
            placeholder="your@email.com"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <Input
            label="Password:"
            id="pass"
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit" value="Přihlásit se" />
        </form>
      </StyledFormWrapper>
    </NarrowContainer>
  );
};

export default withRouter(Login);
