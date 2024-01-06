
import { View, Text, Button } from 'react-native';
import { Link, } from "expo-router"
import { Counter } from '../../../../component/Counter';
import { Counter2 } from '../../../../component/Counter2';


 
export function Page1aUI({  handlers }): JSX.Element {

    console.log('page1')
    return (
      <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Counter />
      <Counter2 data={handlers.data}/>
    
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
      <Button title="back" onPress={handlers.navigation.goBack} />

        <MagicText3a data={handlers.data.magicNum} />
      <MagicText1 data={handlers.data.magicNum} > 
        <MagicText3a data={handlers.data.magicNum} />
      </MagicText1>
 
    </View>
    )
}
const MagicText1 = ({children, data}): JSX.Element => {
 
  return (
    <>
      <Text>MagicNums:</Text>
      <Text >Magic: {data.cast.cars.car_list()}</Text>
      {children}
    </>
  )
}

const MagicText3a = ({ data}): JSX.Element => {

  return (
    <>
      <Text>MagicNums3:</Text>
      <Text >cast: {data.cast.current.magicNum2.current()}</Text>
    </>
  )
}