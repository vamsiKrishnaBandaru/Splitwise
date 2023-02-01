import { combineReducers } from 'redux';
import store from '../store';
import userData from './users';
const rootReducer = combineReducers({
   userData,
   DummyData
});

export default rootReducer;
