
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import { appSettingsReducer } from './reducers/appSettingsReducer'
import { userReducer } from './reducers/userReducer';


const rootReducer = combineReducers({
    appSettingsModule: appSettingsReducer,
    userModule: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


