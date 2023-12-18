import { View, Text, Button } from 'react-native';
import {CounterService} from '../../services/CounterService';
import { Provider } from 'react-redux';
import { Stack } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"
import withPerformanceMonitor from 'react-native-performance-monitor/provider';

// import Page1 from '../screens/page1';
// import Page2 from '../screens/page2';

const App = () => {
  //const CounterService1 = getCounterService();
   return (

    <Provider store={CounterService.getStore()} >
      <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
           <Stack.Screen name="index" />
           <Stack.Screen name="screens/page1" />
					<Stack.Screen name="screens/page2" />
       </Stack>
       </SafeAreaProvider>

      </Provider>
  );
};


//export default withPerformanceMonitor({ WrappedComponent: App, id: 'Screen Name' });
export default App;
