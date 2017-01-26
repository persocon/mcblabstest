import { combineReducers } from 'redux';
import user from './user';


const activityApp = combineReducers({
  user,
});

export default activityApp;
