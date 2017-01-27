import { combineReducers } from 'redux';
import user from './user';
import recordings from './recordings';
import app from './app';


const activityApp = combineReducers({
  user,
  recordings,
  app,
});

export default activityApp;
