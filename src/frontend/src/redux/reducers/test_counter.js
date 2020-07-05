import * as actions from "../actions/actionTypes"
import initialState from "./initialState"
export default function testCounterReducer(state = initialState.counter, action) {
    switch (action.type) {
        case actions.TEST_COUNTER_INCREMENT:
            return state + action.payload
        case actions.TEST_COUNTER_DECREMENT:
            return state - action.payload
        default:
            return state
    }
}
