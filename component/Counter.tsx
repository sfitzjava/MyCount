import { Text } from "react-native";
import { SelectorService } from '../services/SelectorService';

export const Counter = () => {

    let one1 = SelectorService.data.rental.userName();

    console.log('Counter', one1)
    return <Text >Count-one: {one1}</Text>

  }
