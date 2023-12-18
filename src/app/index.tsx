
import { View,  Button } from 'react-native';
import { Link } from "expo-router"

export default function mainmenu() {  

 
    return (
      <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       
         
        <Link href="screens/page1" asChild>
           <Button title="start" />
         </Link>

 
      </View>
    )
  
}
