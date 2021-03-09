import { ILoginUserData } from './ILoginResponse';

export interface IBorrowed {
  date: number;
  user: ILoginUserData;
}

export interface IDevice {
  borrowed: IBorrowed;
  code: string;
  id: string;
  image: string;
  model: string;
  os: string;
  osVersion: string;
  vendor: string;
}