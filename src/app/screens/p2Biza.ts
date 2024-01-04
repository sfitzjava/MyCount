import { useEffect } from 'react';
import { CounterService } from '../../../services/CounterService';

import { BasePresenter } from './BasePresenter';
import { Page2Presenter } from './Page2Presenter';
import { usePathname } from 'expo-router';
let myPage = "";

/**
 * Build hook logic that can be executed
 * from within the JSX component with the
 * setupHooks function.
 */
export function usePresenter(newValue): BasePresenter {
  const pathname = usePathname();
  useEffect(() => {
    myPage = pathname
    console.log('usePage2Presenter onload', newValue);
  },[])
 

 
  const handleResetCount = () => {
    console.log("handleResetCount", newValue.initial, newValue.final);
  };

  const getPageName = () => {
    return "p2Biza"
  }
  
  return {
    ...Page2Presenter(newValue),
    getPageName,
  }
};
