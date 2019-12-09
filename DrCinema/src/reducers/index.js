import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import cinemas from './cinemasReducer';

export default combineReducers({
    authentication,
    cinemas
});