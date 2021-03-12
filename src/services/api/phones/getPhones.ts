import axios from 'axios';
import { API_PHONES } from 'constants/api';
import { IDevice } from 'interfaces/IDevice';
import { userTokenFromLS } from 'utils/user';

export const getPhones = async (): Promise<IDevice[]> => {
  if (!userTokenFromLS()) return [];

  const headers = {
    'Auth-Token': userTokenFromLS(),
  };

  return await axios
    .get(API_PHONES, { headers })
    .then((res) => res.data)
    .catch((e) => console.warn(e));
};
