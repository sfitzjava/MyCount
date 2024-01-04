import { useEffect, useMemo } from 'react';
import { CounterService } from '../../../services/CounterService';
import { usePathname } from "expo-router";
import { BasePresenter } from './BasePresenter';

let myPage = "";
let isVisible: boolean = true;

/**
 * Build hook logic that can be executed
 * from within the JSX component with the
 * setupHooks function.
 */
export const Page3Presenter= ()=>{
 
  console.log('Page1Presenter')
  const pathname = usePathname();
  useEffect(() => {
    myPage = pathname
  },[])
  useEffect(() => {
    isVisible = pathname === myPage;
 
    console.log('pathname', pathname, myPage, isVisible)
  }, [pathname]);

  
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
    console.log("magicTrigger");
  }
 
  
  const addRandom = () => {
    console.log("starting randNum");

    randNum = parseInt(String(Math.random() * 1000), 10);
    CounterService.calculateMagicNumber(randNum);
    console.log("randNum2", randNum);


  };
  const handleCast = () => {
    CounterService.castMagic();
  }

  return {
    handleIncrementCount2,
    handleIncrementCount,
    handleDecrementCount,
    handleResetCount,
    addMagic,
    addRandom,
    handleCast
  }
  
}
  
  
  
  
  
  
//   = {
 
//    randNun: { num:0}, 
//  // randNum()=> { return useMemo(() => parseInt(String(Math.random() * 1000), 10), []) }, 

//    handleIncrementCount2() {
//     CounterService.incrementCount2();
//   },
//    handleIncrementCount () {
//     CounterService.incrementCount();
//   },
  
//    handleDecrementCount() {
//     CounterService.decrementCount();
//   },
  
//    handleResetCount () {
//     CounterService.resetCount();
//   },
  
//   addMagic() {
     
//     const randNum = parseInt(String(Math.random() * 100), 10);

//     CounterService.calculateMagicNumber(randNum);
//     CounterService.castMagic();
//   },
 
  
//    addRandom() {
//     console.log("starting randNum");

//     const randNum = parseInt(String(Math.random() * 1000), 10);
//     CounterService.calculateMagicNumber(randNum);
//     console.log("randNum2", randNum);

//   },
//    handleCast() {
//     CounterService.castMagic();
//   }
  
// }