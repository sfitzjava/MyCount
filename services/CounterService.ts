import { DeviceEventEmitter, EmitterSubscription } from 'react-native';
import { legacy_createStore as createStore } from 'redux'
import reducer, { initialState, INCREMENT,INCREMENT2, DECREMENT, RESET, MAGIC, CAST, } from '../redux/reducer';
import { useSelector } from 'react-redux';


const store = createStore(reducer)

export interface CounterService {
  getStore(): any;
  getState(): any;
  incrementCount(): void;
  incrementCount2(): void;

  decrementCount(): void;
  castMagic(): void;
  resetCount(): void;
  calculateMagicNumber(n:number): void;
  addCountChangeListener(type: string, listener: ({ }:any) => void):EmitterSubscription;
  removeCountChangeListener(listener: EmitterSubscription):void;
}


export const CounterService: CounterService = {
   

    getStore () {
        return store;
       },
   getState() {
     return initialState;
  },

  incrementCount() {
    store.dispatch({ type: INCREMENT });
  },
  incrementCount2() {
    store.dispatch({ type: INCREMENT2 });
  },
  decrementCount() {
    store.dispatch({ type: DECREMENT });
  },
  castMagic() {
    store.dispatch({ type: CAST });
  },
  resetCount() {
    store.dispatch({ type: RESET });
  },

  calculateMagicNumber(n:number) {
    console.log("Costly calculation triggered.");
    let num = 1;
    for (let i = 0; i < n + 1000000; i++) {
      num += 123000;
    }
    const num2 = String (num - num * 0.22)
    store.dispatch({ type: MAGIC, payload: parseInt(num2, 10) });
  },

  addCountChangeListener(type: string, listener: ({}:any) => void):EmitterSubscription {
    return DeviceEventEmitter.addListener(type, listener);
  },


    
  removeCountChangeListener(listener:EmitterSubscription) {
    listener?.remove();
  }

}
