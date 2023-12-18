
import {useEffect, useMemo} from 'react';
import { View, Text, Button } from 'react-native';
import { CounterService } from '../../../services/CounterService';
import { SelectorService } from '../../../services/SelectorService';
import { Link, useNavigation, usePathname } from "expo-router"
import { Counter } from '../../../component/Counter';
import { Counter2 } from '../../../component/Counter2';

let myPage = "";
  
const store = CounterService.getStore();
let isVisible: boolean = true;

const MagicText1 = ({children}): JSX.Element => {

     
  const data = SelectorService.data;

    return (
      <>
      <Text>MagicNums</Text>
      <Text >Magic: {data.magicNum.cast.cars.car_list()}</Text>
      {children}
    </>
    )
  }


 const MagicText3a = (): JSX.Element => {
       const cast1 = SelectorService.data.magicNum.cast.current.magicNum2.current()
       
     console.log('magicNums3a',cast1)
    return (
      <>
        <Text>MagicNums3</Text>
        <Text >cast: {cast1}</Text>
      </>
    )
}

// const Counter = () => {

//     let one1 = SelectorService.data.rental.userName();

//     console.log('Countera', one1)
//     return <Text >Count-one: {one1}</Text>

//   }

//   const Counter2 = () => {
//     const rental = SelectorService.data.rental;

//     let two1 = rental.address();
//    console.log('Counter2a', two1)

//     return <Text>Count-two: {two1}</Text>

//   }

export default function Page1() {

  console.log('page1')
  const pathname = usePathname();
  useEffect(() => {
    myPage = pathname
  },[])
  useEffect(() => {
    isVisible = pathname === myPage;

    console.log('pathname', pathname, myPage, isVisible)
  }, [pathname]);

  

  const navigation = useNavigation();
 
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
      <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Counter />
        <Counter2 />
      
        <Button title="Increment" onPress={handleIncrementCount} />
        <Button title="two Increment" onPress={handleIncrementCount2} />

        <Button title="Decrement" onPress={handleDecrementCount} />
        <Button title="Reset" onPress={handleResetCount} />
        <Button title="Calculate" onPress={addRandom} />
        <Button title="Increment Magic" onPress={addMagic} />
        <Button title="Cast Magic" onPress={handleCast} />
         <Link href="screens/page2" asChild>
           <Button title="Go to page2" />
         </Link>
        <Button title="back" onPress={() => navigation.goBack()} />

        <MagicText3a  />
        <MagicText1 > 
          <MagicText3a />
        </MagicText1>
   
      </View>
    )
}
