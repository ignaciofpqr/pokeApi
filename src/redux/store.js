import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import pokeReducer from './pokeDucks'

const rootReducer = combineReducers({
    pokemons: pokeReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore (rootReducer, composeEnhancers (applyMiddleware (thunk)))
    return store;
}