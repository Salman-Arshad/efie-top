import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
export default store