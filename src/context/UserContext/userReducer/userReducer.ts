import { ILoginUserData } from 'interfaces/ILoginResponse';
import { IReducerAction } from 'interfaces/IReducerAction';
import { ADD_USER, REMOVE_USER } from './actionTypes';
import { IReducerState } from './types';

const userReducer = (
  state: IReducerState,
  action: IReducerAction
): IReducerState => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER:
      return {
        ...state,
        user: { ...payload.user },
      };
    case REMOVE_USER:
      return {
        ...state,
        user: {} as ILoginUserData,
      };
    default:
      return state;
  }
};

export default userReducer;
