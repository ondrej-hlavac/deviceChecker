import React, { useContext, useEffect, useState } from 'react';
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
import { ILoginForm } from 'interfaces/ILoginForm';
import { isEmailValid, isPasswordValid } from 'utils/validations';

type submitEventType = React.FormEvent<HTMLFormElement>;

interface IProps extends RouteComponentProps<any> {}

enum FieldEnum {
  email = 'email',
  password = 'password',
}

interface ILoginErrors {
  emailValid: boolean;
  passwordValid: boolean;
}

const defaultFormFieldsState = {
  email: '',
  password: '',
};

const defaultErrorsState = {
  emailValid: true,
  passwordValid: true,
};

const Login = (props: IProps) => {
  const [formFields, setFormFields] = useState(defaultFormFieldsState as ILoginForm);
  const [fieldsErrors, setFieldsError] = useState(defaultErrorsState as ILoginErrors);
  const [submitError, setSubmitError] = useState(false);
  const { addUser } = useContext(UserContext);
  const { email, password } = formFields;
  const { emailValid, passwordValid } = fieldsErrors;
  // const { setItem: setUser } = useLocalStorage('user');´

  const setFieldValue = (fieldName: keyof ILoginForm, value: string) => {
    const existingFields = { ...formFields };
    existingFields[fieldName] = value;
    setFormFields(existingFields);
  };

  useEffect(() => {
    console.log('validate');
    const errors = { ...fieldsErrors };

    if (email) {
      errors.emailValid = isEmailValid(email);
      setFieldsError(errors);
    }

    if (password) {
      errors.passwordValid = isPasswordValid(password);
      setFieldsError(errors);
    }
  }, [formFields]);

  // submit login form
  const handleSubmit = async (e: submitEventType) => {
    e.preventDefault();

    // validations
    if (!emailValid || !passwordValid || !email || !password) {
      return setSubmitError(true);
    }

    // login data
    const loginData: ILoginUser = {
      login: email,
      password,
    };

    // make ajax call
    const loginResponse: boolean | ILoginUserData = await loginUser(loginData);

    // handle login error
    if (!loginResponse) return setSubmitError(true);

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
        <Headline as='h1'>Log in</Headline>
        {/* Log In error alert */}
        {/* TODO: create form alert styled-component */}
        {submitError && <span style={{ color: 'red' }}>Chyba přihlášení, zkontrolujte prosím přihlašovací údaje.</span>}

        {/* Log In form */}
        <form onSubmit={e => handleSubmit(e)}>
          {/* Email */}
          {!emailValid && <span style={{ color: 'red' }}>Zkontrolujte formát emailu</span>}
          <Input
            label='Email:'
            id={FieldEnum.email}
            type={FieldEnum.email}
            placeholder='your@email.com'
            defaultValue={email}
            onChange={e => setFieldValue(FieldEnum.email, e.target.value)}
          />

          {/* Password */}
          {!passwordValid && <span style={{ color: 'red' }}>Heslo musí mít minimálně 6 znaků.</span>}
          <Input
            label='Password:'
            id={FieldEnum.password}
            type={FieldEnum.password}
            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;'
            defaultValue={password}
            onChange={e => setFieldValue(FieldEnum.password, e.target.value)}
          />
          <SubmitButton type='submit' value='Přihlásit se' disabled={!emailValid || !passwordValid || !email || !password} />
        </form>
      </StyledFormWrapper>
    </NarrowContainer>
  );
};

export default withRouter(Login);
