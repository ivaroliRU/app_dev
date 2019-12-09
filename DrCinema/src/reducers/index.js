import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import cinemas from './cinemasReducer';
import upcomingMovies from './upcomingMoviesReducer'

export default combineReducers({
    authentication,
    cinemas,
    upcomingMovies
});