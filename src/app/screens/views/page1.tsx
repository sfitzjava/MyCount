
import { View, Text, Button } from 'react-native';
import { SelectorService } from '../../../../services/SelectorService';
import { Link,  useNavigation, } from "expo-router"
import { Counter } from '../../../../component/Counter';
import { Counter2 } from '../../../../component/Counter2';


// const MagicText1 = ({children}): JSX.Element => {
//   const data = SelectorService.data;
//     return (
//       <>
//       <Text>MagicNums</Text>
//       <Text >Magic: {data.magicNum.cast.cars.car_list()}</Text>
//       {children}
//     </>
//     )
//   }


//  const MagicText3a = (): JSX.Element => {
//        const cast1 = SelectorService.data.magicNum.cast.current.magicNum2.current()
       
//      console.log('magicNums3a',cast1)
//     return (
//       <>
//         <Text>MagicNums3</Text>
//         <Text >cast: {cast1}</Text>
//       </>
//     )
// }

 
export function Page1({ data, handlers }): JSX.Element {
  const navigation = useNavigation();
 // const { handlers } = props;
  const { handleIncrementCount, handleIncrementCount2, handleDecrementCount, handleResetCount, addRandom, addMagic, handleCast } = handlers;
    console.log('page1')
    return (
      <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Counter />
      <Counter2 data={data}/>
    
      <Button title="Increment" onPress={handleIncrementCount} />
      <Button title="two Increment" onPress={handleIncrementCount2} />

      <Button title="Decrement" onPress={handleDecrementCount} />
      <Button title="Reset" onPress={handleResetCount} />
      <Button title="Calculate" onPress={addRandom} />
      <Button title="Increment Magic" onPress={addMagic} />
      <Button title="Cast Magic" onPress={handleCast} />
       <Link href="screens/page3" asChild>
         <Button title="Go to page3" />
       </Link>
      <Button title="back" onPress={navigation.goBack} />

      <MagicText3a data={data} />
      <MagicText1 data={data}> 
        <MagicText3a data={data}/>
      </MagicText1>
 
    </View>
    )
}

const MagicText1 = ({data, children}): JSX.Element => {

    return (
      <>
      <Text>MagicNums</Text>
      <Text >Magic: {data.magicNum.cast.cars.car_list()}</Text>
      {children}
    </>
    )
  }


const MagicText3a = ({ data }): JSX.Element => {
       //const cast1 = data.magicNum.cast.current.magicNum2.current()
       
    // console.log('magicNums3a',cast1)
    return (
      <>
        <Text>MagicNums3</Text>
        <Text >cast: {data.magicNum.cast.current.magicNum2.current()}</Text>
      </>
    )
}