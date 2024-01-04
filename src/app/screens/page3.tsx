
import { View, Text, Button } from 'react-native';
import { SelectorService } from '../../../services/SelectorService';
import { Counter } from '../../../component/Counter';
import { Counter2 } from '../../../component/Counter2';
import { Page3Presenter } from './p3Biz';   
import { Link, useNavigation } from 'expo-router';


const data = SelectorService.data;


export default function Page3() {
  const pageLogic = Page3Presenter();
  
 const navigation = useNavigation()

  return (
    <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Counter />
      <Counter2 data={data}/>
    
      <Button title="Increment" onPress={pageLogic.handleIncrementCount} />
      <Button title="two Increment" onPress={pageLogic.handleIncrementCount2} />

      <Button title="Decrement" onPress={pageLogic.handleDecrementCount} />
      <Button title="Reset" onPress={pageLogic.handleResetCount} />
      <Button title="Calculate" onPress={pageLogic.addRandom} />
      <Button title="Increment Magic" onPress={pageLogic.addMagic} />
      <Button title="Cast Magic" onPress={pageLogic.handleCast} />
       <Link href="screens/page2a" asChild>
         <Button title="Go to page2a" />
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