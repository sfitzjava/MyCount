
import { createSelector } from 'reselect';
import {Map, fromJS } from 'immutable';
import {RootState, useAppSelector } from './SelectorUtils';
import { CounterService } from '../../services/CounterService';

const castSelect = createSelector((state:RootState) => state.getIn(['magicNums', 'cast', 'current', 'magicNums2', 'cast', 'current'], Map({})), (cast) => fromJS(cast),)
const magic2Cast = createSelector((state:RootState) =>  state.getIn(['magicNums', 'cast', 'current', 'magicNums2', 'cast', 'initial'], Map({})), (two) => fromJS(two),)
const select16 = createSelector((state:RootState) =>   state.getIn(['counters', 'one', 'current'], Map({})), (one) => fromJS(one), )
const select17 = createSelector((state:RootState) =>  state.getIn(['magicNums', 'magic', 'current'], Map({})), (magic) => fromJS(magic),) 
const select18 = createSelector((state:RootState) => state.getIn(['counters', 'two', 'current'], Map({})), (cast) => fromJS(cast),)

export function current() {
    console.log("current triggered");
    return useAppSelector(castSelect);
}

export function Q() {
    return useAppSelector(magic2Cast);
}

export function R() {
    return useAppSelector(select16);
}

export function S() {
    return useAppSelector(select17);
}

export function T() {
    return useAppSelector(select18);
}

export interface Current {
        magicNum2: {
            current(): any;
            Q(): any;
        }

}
   
  
  export const Current: Current = {
           magicNum2: {
            current,
            Q,
      
        } 
    
  }
  