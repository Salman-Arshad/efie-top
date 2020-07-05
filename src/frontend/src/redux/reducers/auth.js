import * as actions from "../actions/actionTypes"
import initialState from "./initialState";

export default function authReducer(state=initialState.auth,action){
    switch(action.type){
        case actions.USER_SIGNIN_SUCCESS:
            return action.userData;
        case actions.USER_SIGNOUT_SUCCESS:
            return initialState.auth
        default:
            return state
    }
}