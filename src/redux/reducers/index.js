import { combineReducers } from 'redux';
import DummyData from './DummyData';
import userData from './users';
const rootReducer = combineReducers({
   userData,
   DummyData
});

export default rootReducer;
