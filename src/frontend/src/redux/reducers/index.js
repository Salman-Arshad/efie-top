import {combineReducers} from "redux"
import auth from "./auth"
import testCounter from "./test_counter"
const rootReducer= combineReducers({
    auth:auth,
    counter:testCounter
})

export default rootReducer