
import {useEffect, useMemo} from 'react';
import { CounterService } from '../../../services/CounterService';
import { SelectorService } from '../../../services/SelectorService';
import {  usePathname } from "expo-router"
import {Page1} from './views/page1'

let myPage = "";
let isVisible: boolean = true;

const data = SelectorService.data;


export default function Page1Presenter() {

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

  return (
   //<Page1 data={data} handlers={this}/>
     <Page1 data={data} handlers={{handleIncrementCount, handleIncrementCount2, handleDecrementCount, handleResetCount, addRandom, addMagic, handleCast}}/>
    )
}
