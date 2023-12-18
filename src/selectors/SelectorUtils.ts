import { useSelector } from 'react-redux';
import {Map } from 'immutable';

export const useAppSelector: (callback: (state: any) => any) => any =
  useSelector;
export type RootState = Map<string[], any>;
