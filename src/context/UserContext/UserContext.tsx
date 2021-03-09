import React, { createContext, ReactNode, useReducer } from 'react';
import userReducer, { initialState, IReducerState } from './userReducer';
import { ILoginUserData } from 'interfaces/ILoginResponse';
import { addUserAction, removeUserAction } from './userReducer/actions';

interface IProps {
  children: ReactNode;
}

interface IContextState {
  addUser: (user: ILoginUserData) => void;
  removeUser: () => void;
}

const initialContext: IContextState = {
  addUser: () => {},
  removeUser: () => {},
};

type UserContextStateType = IContextState & IReducerState;

export const Context = createContext<UserContextStateType>({
  ...initialState,
  ...initialContext,
});

const UserContext = ({ children }: IProps) => {
  const [reducerState, dispatch] = useReducer(userReducer, initialState);

  const addUser = (user: ILoginUserData) => {
    dispatch(addUserAction(user));
  };

  const removeUser = () => {
    dispatch(removeUserAction());
  };

  const contextValue: UserContextStateType = {
    ...reducerState,
    addUser,
    removeUser,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default UserContext;
