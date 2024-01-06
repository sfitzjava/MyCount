
import { View, Text, Button } from 'react-native';
import { Counter } from '../../../component/Counter';
import { Counter2 } from '../../../component/Counter2';
import { Page2Presenter}  from './Page2Presenter';   
import { Link } from 'expo-router';
import { BasePresenter } from './BasePresenter';


export default function Page2() {

  const pageLogic: BasePresenter = Page2Presenter({ initial: 5, final: 2 });
  pageLogic.onLoad();
  
  return (
    <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Counter />
      <Counter2 data={pageLogic.data}/>
    
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
      <Button title="back" onPress={pageLogic.goBack} />

      <MagicText3a data={pageLogic.data} />
      <MagicText1 data={pageLogic.data}> 
        <MagicText3a data={pageLogic.data}/>
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
    return (
      <>
        <Text>MagicNums3</Text>
        <Text >cast: {data.magicNum.cast.current.magicNum2.current()}</Text>
      </>
    )
}