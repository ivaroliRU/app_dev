import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../views/Home';
import Cinema from '../views/Cinema';
import UpcomeingMovies from '../views/UpcomeingMovies';
import CinemaDetails from '../views/CinemaDetails';
import MovieDetails from '../views/MovieDetails';

//export the routes
export default createAppContainer(createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        header: null,
    }),
        headerBackTitle: null,
    },

    Cinema: {
      screen: Cinema,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#1B1B1B',
        },
        headerTintColor: '#fff',
        title: 'Cinemas'
      }),
    },

    UpcomeingMovies: {
      screen: UpcomeingMovies,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#1B1B1B',
        },
        headerTintColor: '#fff',
        title: 'Upcomeing Movies'
      }),
    },

    CinemaDetails: {
      screen: CinemaDetails,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#1B1B1B',
        },
        headerTintColor: '#fff',
        title: 'Cinema Details'
      }),
    },

    MovieDetails: {
      screen: MovieDetails,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#1B1B1B',
        },
        headerTintColor: '#fff',
        title: 'Movie Details'
      }),
    }

 }));
