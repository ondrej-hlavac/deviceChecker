import { ILoginUserData } from 'interfaces/ILoginResponse';
import { IReducerAction } from 'interfaces/IReducerAction';
import { ADD_USER, REMOVE_USER } from './actionTypes';


export const addUserAction = (
  user: ILoginUserData
): IReducerAction => ({
  type: ADD_USER,
  payload: { user },
});

export const removeUserAction = (): IReducerAction => ({
  type: REMOVE_USER
});