import { useEffect, useMemo } from 'react';
import { CounterService } from '../../../services/CounterService';
import { useNavigation, usePathname } from "expo-router";
import { BasePresenter } from './BasePresenter';

let myPage = "";
let isVisible: boolean = true;

/**
 * Build hook logic that can be executed
 * from within the JSX component with the
 * setupHooks function.
 */
export const Page3Presenter= ():BasePresenter=>{
 
  console.log('Page1Presenter')
  const pathname = usePathname();
  const counterService = CounterService();
  useEffect(() => {
    myPage = pathname
  },[])
  useEffect(() => {
    isVisible = pathname === myPage;
 
    console.log('pathname', pathname, myPage, isVisible)
  }, [pathname]);

  
  let randNum = useMemo(() => parseInt(String(Math.random() * 1000), 10), []); //parseInt(Math.random() * 1000, 10);

  const handleIncrementCount2 = () => {
    counterService.handleIncrementCount2();
  };
  const handleIncrementCount = () => {
    counterService.handleIncrementCount();
  };
  
  const handleDecrementCount = () => {
    counterService.handleDecrementCount();
  };
  
  const handleResetCount = () => {
    counterService.handleResetCount();
  };
  
  const addMagic = () => {
    randNum = parseInt(String(Math.random() * 100), 10);

    counterService.calculateMagicNumber(randNum);
    counterService.castMagic();
    console.log("magicTrigger");
  }
 
  
  const addRandom = () => {
    console.log("starting randNum");

    randNum = parseInt(String(Math.random() * 1000), 10);
    counterService.calculateMagicNumber(randNum);
    console.log("randNum2", randNum);


  };
  const handleCast = () => {
    counterService.castMagic();
  }

  const getPageName = () => {
   return "" 
  }

  const goBack = () => {
    console.log("goBack");
  }

  const onLoad = () => {
    
  }
  const data = {
    randNum
  }
  const startHooks = () => {
    
  }
  const navigation = useNavigation();
  
  return {

    handleIncrementCount2,
    handleIncrementCount,
    handleDecrementCount,
    handleResetCount,
    addMagic,
    addRandom,
    handleCast,
    getPageName,
    goBack,
    onLoad,
    data,
    startHooks,
    navigation
  }
  
}
