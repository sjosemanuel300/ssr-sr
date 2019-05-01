import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import notificationReducer from './notificationReducer';


export default combineReducers({
    clientReducer,
    notificationReducer,
});