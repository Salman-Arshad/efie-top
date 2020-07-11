import * as actions from "./actionTypes"

export function INCREMENT(num){
    return{
        type:actions.TEST_COUNTER_INCREMENT,
        payload:num
    }
}

export function DECREMENT(num){
    return{
        type:actions.TEST_COUNTER_DECREMENT,
        payload:num
    }
}