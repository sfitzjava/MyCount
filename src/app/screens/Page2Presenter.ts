import { useEffect, useMemo } from 'react';
import { CounterService } from '../../../services/CounterService';
import { SelectorService } from '../../../services/SelectorService';
import {  useNavigation, usePathname } from "expo-router";
import { BasePresenter } from './BasePresenter';
 


export const Page2Presenter = (NewValue:{initial:number, final:number}):any=>{
  const data = SelectorService.data;
  const newValue = NewValue
  console.log('Page2Presenter', newValue.initial, newValue.final);
  const pathname = usePathname();
  const navigation = useNavigation();
  const counterService = CounterService();
  console.log("counterService", counterService);
  const getPageName = () => {
    return "Presenter2"
  }
  let randNum = useMemo(() => parseInt(String(Math.random() * 1000), 10), []); //parseInt(Math.random() * 1000, 10);

  
  const addMagic = () => {
    randNum = parseInt(String(Math.random() * 100), 10);

    counterService.calculateMagicNumber(randNum);
    counterService.castMagic();
    console.log("magicTrigger", newValue.initial, newValue.final);
  }
 
  
  const addRandom = () => {
    console.log("starting randNum", newValue.initial, newValue.final);

    randNum = parseInt(String(Math.random() * 1000), 10);
    counterService.calculateMagicNumber(randNum);
    console.log("randNum2", randNum);


  };
  const handleCast = () => {
    counterService.castMagic();
  }
  const goBack = () => {
    
    navigation.goBack();
  }
  
  const onLoad = () =>  useEffect(() => {
    console.log('Page2Presenter onload', newValue);
  }, [])
  
  return {
  ...counterService,
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