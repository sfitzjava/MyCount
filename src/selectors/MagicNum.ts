
import { createSelector } from 'reselect';
import {Map, fromJS } from 'immutable';
import {RootState, useAppSelector } from './SelectorUtils';
import { CounterService } from '../../services/CounterService';
import { Current } from './MagicNumCurrent';

const magicSelect = createSelector((state:RootState) =>  state.getIn(['magicNums', 'magic', 'current'], Map({})), (magic) => fromJS(magic),) 
const magic2Cast = createSelector((state:RootState) =>  state.getIn(['magicNums', 'cast', 'current', 'magicNums2', 'cast', 'initial'], Map({})), (two) => fromJS(two),)

export function C() {
    return useAppSelector(magicSelect);
}

export function car_list() {
    return useAppSelector(magic2Cast);
}


export interface MagicNums {

    cast: {
        C: any;
        cars: { car_list(): any};
        current: Current
    }

}
   
  
export const MagicNums: MagicNums = {

    cast: {
          C,
          cars: { car_list },
          current: Current
    }
        
       
    
  }
  