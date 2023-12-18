import { createSelector } from 'reselect';
import {Map, fromJS } from 'immutable';
import {RootState, useAppSelector } from './SelectorUtils';
import { CounterService } from '../../services/CounterService';


const oneSelect = createSelector((state:RootState) =>   state.getIn(['counters', 'one', 'current'], Map({})), (one) => fromJS(one), )
const select4 = createSelector((state:RootState) =>   state.getIn(['counters', 'two', 'current'], Map({})), (one) => fromJS(one), )
const select15 = createSelector((state:RootState) =>  state.getIn(['magicNums', 'magic', 'current'], Map({})), (two) => fromJS(two),)

export function userName() {
    return useAppSelector(oneSelect);
}
export function address() {
    const val = useAppSelector(select4)
    castMagic()
    return val;
}
export function car_class1(index: number) {
    const val = useAppSelector(select15)
   castMagic()
    return val
}
 function castMagic() {
  Promise.resolve( CounterService.castMagic())
}

export interface Rental {
            userName(): any;
            address(): any;
            car_class1
}

export const Rental: Rental = {
    userName,
    address,
    car_class1
}
