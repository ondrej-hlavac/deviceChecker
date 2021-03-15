import axios from 'axios';
import { API_PHONES } from 'constants/api';
import { IDevice } from 'interfaces/IDevice';

export const getPhones = async (token: string): Promise<IDevice[]> => {
  if (!token) return [];

  const headers = {
    'Auth-Token': token,
  };

  return await axios
    .get(API_PHONES, { headers })
    .then((res) => res.data)
    .catch((e) => console.warn(e));
};
