// here we will create the store
// createStore function from redux is used to create a store

import {createStore} from 'redux';
import counterReducer from './counterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store=createStore(counterReducer,composeWithDevTools());

export default store;

