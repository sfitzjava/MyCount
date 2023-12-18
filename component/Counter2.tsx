import { Text } from "react-native";
import { SelectorService } from '../services/SelectorService';

export const Counter2 = () => {
    const two1 =  SelectorService.data.rental.address();
   //console.log('Counter2', two1)

    return <Text>Count-two: {two1}</Text>

  }