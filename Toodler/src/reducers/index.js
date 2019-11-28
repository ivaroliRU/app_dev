import { combineReducers } from 'redux';
import task from './tasksReducer';
import board from './boardReducer';
import list from './listReducer';

export default combineReducers({
    task,
    board,
    list
});