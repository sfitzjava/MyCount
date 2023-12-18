
import { createSelector } from 'reselect';
import {Map, fromJS } from 'immutable';
import { useAppSelector, RootState } from './SelectorUtils';


 const twoSelect = createSelector((state:RootState) =>  state.getIn(['counters', 'two', 'current'], Map({})), (two) => fromJS(two),)
   const select5 = createSelector((state:RootState) =>  state.getIn(['magicNums', 'magic', 'current'], Map({})), (magic) => fromJS(magic),) 
  const select7  = createSelector((state:RootState) =>  state.getIn(['counters', 'two', 'current'], Map({})), (two) => fromJS(two),)
  const select8 = createSelector((state:RootState) =>   state.getIn(['counters', 'one', 'current'], Map({})), (one) => fromJS(one), )


export function B() {
    return useAppSelector(twoSelect);
}
export function G() {
    return useAppSelector(select5);
}
export function I() {
    return useAppSelector(select7);
}

export function J() {
    return useAppSelector(select8);
}


export interface MoreData {

        B(): any;
        G(): any;
        I(): any;
        J(): any;

}
 

export const MoreData: MoreData = {

        B,
        G,
        I,
        J,
}
