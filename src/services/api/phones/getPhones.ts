import axios from 'axios';
import { API_PHONES } from 'constants/api'
import { userTokenFromLS } from 'utils/user';


export const getPhones = async () => {
  if (!userTokenFromLS()) return;
  
  const headers = {
    'Auth-Token': userTokenFromLS()
  }

  return await axios
    .get(API_PHONES, {headers})
    .then(res => res.data)
    .catch(e => console.warn(e));
}