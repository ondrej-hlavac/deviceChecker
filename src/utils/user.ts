import { EnumUserType } from 'interfaces/EnumUserType';
import { ILoginUserData } from 'interfaces/ILoginResponse';

export const isLogedIn = (user: ILoginUserData) => user.hasOwnProperty('token');

export const isUserAdmin = (user: ILoginUserData) =>
  user.type === EnumUserType.admin;

export const userTokenFromLS = () => {
  const userString = localStorage.getItem('user');
  const { token } = userString && JSON.parse(userString);
  if (!token) return;
  return token;
};
