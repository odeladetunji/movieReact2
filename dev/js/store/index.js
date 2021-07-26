import { combineReducers, createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';

const logger = createLogger();

const store = createStore(
                          allReducers,
                          applyMiddleware(promise(), logger)
                      );
export default store;
