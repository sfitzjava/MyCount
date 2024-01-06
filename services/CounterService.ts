import { DeviceEventEmitter, EmitterSubscription } from 'react-native';
import { legacy_createStore as createStore } from 'redux'
import reducer, { initialState, INCREMENT,INCREMENT2, DECREMENT, RESET, MAGIC, CAST, } from '../redux/reducer';
import { useSelector } from 'react-redux';


const store = createStore(reducer)

export interface CounterService {
  getStore(): any;
  getState(): any;
  handleIncrementCount(): void;
  handleIncrementCount2(): void;
  handleDecrementCount(): void;
  handleResetCount(): void;
  castMagic(): void;
  calculateMagicNumber(n:number): void;
  addCountChangeListener(type: string, listener: ({ }:any) => void):EmitterSubscription;
  removeCountChangeListener(listener: EmitterSubscription):void;
}


export const CounterService = ():CounterService  =>{
   
    function getStore () {
        return store;
    }
  
    function getState() {
     return initialState;
  }

  function handleIncrementCount() {
    store.dispatch({ type: INCREMENT });
  }

  function handleIncrementCount2() {
    store.dispatch({ type: INCREMENT2 });
  }

  function handleDecrementCount() {
    store.dispatch({ type: DECREMENT });
  }

  function castMagic() {
    store.dispatch({ type: CAST });
  }

  function handleResetCount() {
    store.dispatch({ type: RESET });
  }

  function calculateMagicNumber(n:number) {
    console.log("Costly calculation triggered.");
    let num = 1;
    for (let i = 0; i < n + 1000000; i++) {
      num += 123000;
    }
    const num2 = String (num - num * 0.22)
    store.dispatch({ type: MAGIC, payload: parseInt(num2, 10) });
  }

  function addCountChangeListener(type: string, listener: ({}:any) => void):EmitterSubscription {
    return DeviceEventEmitter.addListener(type, listener);
  }


    
  function removeCountChangeListener(listener:EmitterSubscription) {
    listener?.remove();
  }

  return {
    getStore,
    getState,
    handleIncrementCount,
    handleIncrementCount2,
    handleDecrementCount,
    handleResetCount,
    castMagic,
    calculateMagicNumber,
    addCountChangeListener,
    removeCountChangeListener
  }

}
