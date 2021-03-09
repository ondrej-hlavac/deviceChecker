import axios, { AxiosResponse } from 'axios';
import { API_LOGIN } from 'constants/api';
import { ILoginResponse } from 'interfaces/ILoginResponse';
import { ILoginUser } from 'interfaces/ILoginUser';

const headers = {
  'Content-Type': 'application/json',
};

export const loginUser = async (data: ILoginUser) => {
  return await axios
    .post(API_LOGIN, JSON.stringify(data), { headers })
    .then((res: AxiosResponse<ILoginResponse>) => {
      return res.data;
    })
    .catch((e) => {
      console.error(e);
      return false;
    });
}