import { EnumUserType } from './EnumUserType';

export interface ILoginUserData {
  id: string;
  login: string;
  name: string;
  token: string;
  type: EnumUserType;
}

export interface ILoginResponse {
  data: ILoginUserData;
}
