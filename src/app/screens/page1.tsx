
import {useEffect, useMemo} from 'react';
import { CounterService } from '../../../services/CounterService';
import {  usePathname } from "expo-router"
import { View, Text, Button } from 'react-native';
import { Link,  useNavigation, } from "expo-router"
import { Counter } from '../../../component/Counter';
import { createSelector } from 'reselect';
import { RootState, useAppSelector } from '@/selectors/SelectorUtils';
import { fromJS, Map } from 'immutable';

const castSelect = createSelector((state:RootState) => state.getIn(['magicNums', 'cast', 'current', 'magicNums2', 'cast', 'current'], Map({})), (cast) => fromJS(cast),)
const magic2Cast = createSelector((state:RootState) =>  state.getIn(['magicNums', 'cast', 'current', 'magicNums2', 'cast', 'initial'], Map({})), (two) => fromJS(two),)
const select4 = createSelector((state:RootState) =>   state.getIn(['counters', 'two', 'current'], Map({})), (one) => fromJS(one), )

let myPage = "";


export default function Page1Presenter() {

  console.log('Page1Presenter')
  const pathname = usePathname();
  useEffect(() => {
    myPage = pathname
  },[])

  const counterService = CounterService();

  let randNum = useMemo(() => parseInt(String(Math.random() * 1000), 10), []); //parseInt(Math.random() * 1000, 10);

  
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

  return (
     <InternalPage1  handlers={{...counterService, addRandom, addMagic, handleCast}}/>
    )
}


export function InternalPage1({  handlers }): JSX.Element {
   
  const navigation = useNavigation();
 
    console.log('page1', handlers)
    return (
      <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Counter />
      <Counter2 />
    
      <Button title="Increment" onPress={handlers.handleIncrementCount} />
      <Button title="two Increment" onPress={handlers.handleIncrementCount2} />

      <Button title="Decrement" onPress={handlers.handleDecrementCount} />
      <Button title="Reset" onPress={handlers.handleResetCount} />
      <Button title="Calculate" onPress={handlers.addRandom} />
      <Button title="Increment Magic" onPress={handlers.addMagic} />
      <Button title="Cast Magic" onPress={handlers.handleCast} />
       <Link href="screens/page3" asChild>
         <Button title="Go to page3" />
       </Link>
      <Button title="back" onPress={navigation.goBack} />

        <MagicText3a   />
      <MagicText1  > 
        <MagicText3a  />
      </MagicText1>
 
    </View>
    )
}
const MagicText1 = ({ children }): JSX.Element => {
 
  return (
    <>
      <Text>MagicNums:</Text>
      <Text >Magic: {useAppSelector(magic2Cast)}</Text>
      {children}
    </>
  )
}

const MagicText3a = (): JSX.Element => {

  return (
    <>
      <Text>MagicNums3:</Text>
      <Text >cast: {useAppSelector(castSelect)}</Text>
    </>
  )
}


export const Counter2 = () => {
    return <Text >Count-two: {useAppSelector(select4)}</Text>
  }