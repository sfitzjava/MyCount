
import { useMemo } from 'react';
import { View, Text, Button } from 'react-native';
import { CounterService } from '../../../services/CounterService';
import { SelectorService } from '../../../services/SelectorService';
import {  useNavigation } from "expo-router"
import { Counter as P2Counter} from '../../../component/Counter';
import { Counter2 as P2Counter2} from '../../../component/Counter2';



let myPage = "";
 let isVisible = false;
const data = SelectorService.data;
 const MagicText = ({children}): JSX.Element => {
 
    return (
      <>
        <Text>MagicNums</Text>
        <Text >Magic: {data.magicNum.cast.cars.car_list()}</Text>
        {children}
      </>
    )
  }

  const MagicText3 = (): JSX.Element => {

      const cast1=  data.magicNum.cast.current.magicNum2.current();  
     console.log('magicNums3', cast1)
    return (
      <>
        <Text>MagicNums3</Text>
        <Text >cast: {cast1}</Text>
      </>
    )
}


  // const Counter = () => {

  //   const one1 = data.rental.userName(); 
  //   console.log('Counter', one1)
  //   return <Text>Count-one: {one1}</Text>

  // }

  // const Counter2 = () => {

  //   const two1 = data.rental.car_class1();

  //  console.log('Counter2', two1)

  //   return <Text>car_listr: {two1}</Text>

  // }
  

export default function Page2() {
  console.log('page2')
  
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
        <P2Counter />
        <P2Counter2 />

        <Button title="Increment" onPress={handleIncrementCount} />
        <Button title="two Increment" onPress={handleIncrementCount2} />

        <Button title="Decrement" onPress={handleDecrementCount} />
        <Button title="Reset" onPress={handleResetCount} />
        <Button title="Calculate" onPress={addRandom} />
        <Button title="Increment Magic" onPress={addMagic} />
        <Button title="Cast Magic" onPress={handleCast} />
        <Button title="back" onPress={() => navigation.goBack()} />

        <MagicText3  />
        <MagicText > 
          <MagicText3 />
        </MagicText>

      </View>
    )
}
