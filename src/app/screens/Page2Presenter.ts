import { useEffect, useMemo } from 'react';
import { CounterService } from '../../../services/CounterService';
import { SelectorService } from '../../../services/SelectorService';
import {  useNavigation, usePathname } from "expo-router";
import { BasePresenter } from './BasePresenter';
 
let myPage = "";
let isVisible: boolean = true;
let navigation = undefined;

export const Page2Presenter = (NewValue:{initial:number, final:number}):BasePresenter=>{
  const data = SelectorService.data;
  const newValue = NewValue
  console.log('Page2Presenter', newValue.initial, newValue.final);
  const pathname = usePathname();
  navigation = useNavigation();
 
  // useEffect(() => {
  //   isVisible = pathname === myPage;
 
  //   console.log('pathname', pathname, myPage, isVisible)
  // }, [pathname]);

  const getPageName = () => {
    return "Presenter2"
  }
  let randNum = useMemo(() => parseInt(String(Math.random() * 1000), 10), []); //parseInt(Math.random() * 1000, 10);


  const handleIncrementCount2 = () => {
    CounterService.incrementCount2();
  };
  const handleIncrementCount = () => {
    CounterService.incrementCount();
  };
  
  const handleDecrementCount = () => {
    CounterService.decrementCount();
  };
  
  const handleResetCount = () => {
    CounterService.resetCount();
  };
  
  const addMagic = () => {
    randNum = parseInt(String(Math.random() * 100), 10);

    CounterService.calculateMagicNumber(randNum);
    CounterService.castMagic();
    console.log("magicTrigger", newValue.initial, newValue.final);
  }
 
  
  const addRandom = () => {
    console.log("starting randNum", newValue.initial, newValue.final);

    randNum = parseInt(String(Math.random() * 1000), 10);
    CounterService.calculateMagicNumber(randNum);
    console.log("randNum2", randNum);


  };
  const handleCast = () => {
    CounterService.castMagic();
  }
  const goBack = () => {
    
    navigation.goBack();
  }
  
  const onLoad = () =>  useEffect(() => {
    console.log('usePage2Presenter onload', newValue);
  }, [])
  
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
  }
  
}

export const usePage2Presenter = (NewValue:{initial:number, final:number}):BasePresenter=>{

  const newValue = NewValue
  useEffect(() => {
    console.log('usePage2Presenter onload', newValue);
  },[])

 
  return {
    ...Page2Presenter(NewValue),
    
  }
}