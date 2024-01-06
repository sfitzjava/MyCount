import { useEffect} from 'react';
import { BasePresenter } from './BasePresenter';
import { Page2Presenter } from './Page2Presenter';
import { useNavigation, usePathname } from 'expo-router';
let myPage = "";

/**
 * Build hook logic that can be executed
 * from within the JSX component with the
 * setupHooks function.
 */
export function usePresenter(newValue): BasePresenter {
  const navigation = useNavigation();

  const pathname = usePathname();
  useEffect(() => {
    myPage = pathname
    console.log('usePage2Presenter onload', newValue);
  }, [])

 
  // const handleResetCount = () => {
  //   console.log("handleResetCount", newValue.initial, newValue.final);
  // };

  const getPageName = () => {
    return "p2Biza"
  }
  const onLoad = () => {

    useEffect(() => {
      console.log('usePresenter onload', newValue);
    }, [])
  }
  const page2Presenter = Page2Presenter(newValue);

  return {
    ...page2Presenter,
    getPageName,
    onLoad,
    navigation
  }
};
