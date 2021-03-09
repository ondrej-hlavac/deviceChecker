import UserContext from 'context/UserContext';
import React, { ReactNode } from 'react';

export interface IContextProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: IContextProps) => {
  return <UserContext>{children}</UserContext>;
};

export default ContextProvider;
