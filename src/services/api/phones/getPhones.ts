import axios from 'axios';
import { API_PHONES } from 'constants/api'
import { userTokenFromLS } from 'utils/user';

const headers = {
  'Auth-Token': userTokenFromLS()
}

export const getPhones = async () => {

  return await axios
    .get(API_PHONES, {headers})
    .then(res => res.data)
    .catch(e => console.warn(e));
}