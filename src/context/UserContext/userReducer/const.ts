import { ILoginUserData } from 'interfaces/ILoginResponse';
import { IReducerState } from './types';

export const initialState: IReducerState = {
  user: {} as ILoginUserData,
};