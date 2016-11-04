/**
* @Author: rajasekhar
* @Date:   2016-11-03T04:40:38+05:30
* @Last modified by:   rajasekhar
* @Last modified time: 2016-11-04T04:40:35+05:30
*/



import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducers from './reducers';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));

export default store;
