import {Map, fromJS} from 'immutable';

  
// Actions
const INCREMENT2 = "INCREMENT2";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const MAGIC = "MAGIC";
const CAST = "CAST";

// Action creators
export const increment = () => ({
    type: INCREMENT,
})
export const increment2 = () => ({
    type: INCREMENT2,
})

export const decrement = () => ({
    type: DECREMENT,
})

export const reset = () => ({
    type: RESET
})

export const cast = () => ({ type: CAST })

// Initial state
export const initialState = fromJS(Map({
    counters: { one: { initial: 0, current: 0 }, two: { initial: 0, current: 0 } },
    magicNums: {
        magic: { initial: 0, current: 0 },
        cast: {
            initial: 0,
            current: {
                magicNums2: {
                    magic: { initial: 0, current: 0 },
                    cast: { initial: 0, current: 0 },
                }
            }
        }
    }
}
))

 
// Root reducer
const rootReducer = (state = initialState, action: { type: any; payload?: any; }) => {
    switch (action.type) {
        case INCREMENT2:
            return fromJS(state.setIn(['counters', 'two', 'current'], state.getIn(['counters', 'two', 'current']) + 1))//state.counters.one = (state.counters.one + 1)


            case INCREMENT:
               
                return fromJS(state.setIn(['counters', 'one', 'current'], state.getIn(['counters', 'one', 'current']) + 1)) //state.counters.one = (state.counters.one + 1)
           
            case DECREMENT:
                fromJS(state.setIn(['magicNums', 'magic', 'current'], state.getIn(['counters', 'two', 'current']) - 1))   

                return fromJS(state.setIn(['counters', 'one', 'current'], state.getIn(['counters', 'one', 'current']) - 1))
           
            case CAST:
            console.log("cast Magic done");
          
                return fromJS(state.setIn(['magicNums', 'cast', 'current', 'magicNums2', 'cast', 'current'], (state.getIn(['counters', 'two', 'current']) * 2)+ (state.getIn(['counters', 'one', 'current']) )))
            
        case RESET:
        
                return fromJS(initialState)
           
            case MAGIC:
               
                return fromJS(state.setIn(['magicNums', 'cast', 'current', 'magicNums2', 'cast', 'initial'], action.payload))
          
            default:
                return fromJS(state)
        }
  
}

export default rootReducer
export { INCREMENT,INCREMENT2, DECREMENT, RESET, MAGIC, CAST }