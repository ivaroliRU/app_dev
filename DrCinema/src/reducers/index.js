import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import cinemas from './cinemasReducer';
import upcomingMovies from './upcomingMoviesReducer';
import movies from './moveisReducer';
import randomPoster from './randomPosterReducer'

export default combineReducers({
    authentication,
    cinemas,
    upcomingMovies,
    movies,
    randomPoster
});