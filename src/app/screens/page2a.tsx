
import { View, Text, Button } from 'react-native';
import { Counter as P2Counter} from '../../../component/Counter';
import { Counter2 as P2Counter2} from '../../../component/Counter2';
import { usePresenter} from "./p2Biza" 
import { BasePresenter } from './BasePresenter';


export default function Page2a() {
  
  const pageLogic:BasePresenter = usePresenter({initial:15, final:12});
 
    return (
      <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{pageLogic.getPageName()}</Text>
        <P2Counter />
        <P2Counter2 data={pageLogic.data}/>
        <Counter3 data={pageLogic.data} />

        <Button title="Increment" onPress={pageLogic.handleIncrementCount} />
        <Button title="two Increment" onPress={pageLogic.handleIncrementCount2} />

        <Button title="Decrement" onPress={pageLogic.handleDecrementCount} />
        <Button title="Reset" onPress={pageLogic.handleResetCount} />
        <Button title="Calculate" onPress={pageLogic.addRandom} />
        <Button title="Increment Magic" onPress={pageLogic.addMagic} />
        <Button title="Cast Magic" onPress={pageLogic.handleCast} />
        <Button title="back" onPress={() => pageLogic.goBack()} />
      
        <MagicText3 data={pageLogic.data} />
        <MagicText data={pageLogic.data}> 
          <MagicText3 data={pageLogic.data} />
        </MagicText>

      </View>
    )
}

const MagicText = ({children, data}): JSX.Element => {
 
  return (
    <>
      <Text>MagicNums</Text>
      <Text >Magic: {data.magicNum.cast.cars.car_list()}</Text>
      {children}
    </>
  )
}

const MagicText3 = ({ data }): JSX.Element => {
  return (
    <>
      <Text>MagicNums3</Text>
      <Text >cast: {data.magicNum.cast.current.magicNum2.current()}</Text>
    </>
  )
}



const Counter3 = ({data}) => {

  return <Text>car_listr: {data.rental.car_class1.data()}</Text>

}