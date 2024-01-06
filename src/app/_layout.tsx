import { View, Text, Button } from 'react-native';
import {CounterService} from '../../services/CounterService';
import { Provider } from 'react-redux';
import { Stack, ErrorBoundaryProps } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"
import withPerformanceMonitor from 'react-native-performance-monitor/provider';
// Re-export the default UI
//export { ErrorBoundary } from 'expo-router';


export function ErrorBoundary(props: ErrorBoundaryProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "blue" }}>
      <Text>{props.error.message}</Text>
      <Text onPress={props.retry}>Try Again? start</Text>
    </View>
  );
}
// import Page1 from '../screens/page1';
// import Page2 from '../screens/page2';

const App = () => {
  //const CounterService1 = getCounterService();
   return (

    <Provider store={CounterService().getStore()} >
      <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
           <Stack.Screen name="index" />
           <Stack.Screen name="screens/page1" />
           <Stack.Screen name="screens/page1a" />
           <Stack.Screen name="screens/page2" />
           <Stack.Screen name="screens/page2a" />
           <Stack.Screen name="screens/page3" />
       </Stack>
       </SafeAreaProvider>

      </Provider>
  );
};


//export default withPerformanceMonitor({ WrappedComponent: App, id: 'Screen Name' });
export default App;
