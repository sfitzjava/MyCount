
import { View,  Button } from 'react-native';
import { Link,  } from "expo-router"
import {Page1} from './screens/views/page1aUI'
// Re-export the default UI

export default function mainmenu() {  

  
    return (
      <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Link href="screens/page1" asChild>
           <Button title="page1" />
        </Link> 
          <Link href="screens/page1a" asChild>
           <Button title="page1a" />
        </Link>
        <Link href="screens/page2" asChild>
           <Button title="page2" />
        </Link> 
        <Link href="screens/page2a"  asChild>
           <Button title="page2a" />
         </Link> 
        <Link href="screens/page3" asChild>
           <Button title="page3" />
         </Link> 
      </View>
    )
  
}
