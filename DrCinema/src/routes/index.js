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
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#303337',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0
        },
        headerTintColor: '#fff',
        title: 'Cinemas',
      },
    },

    UpcomeingMovies: {
      screen: UpcomeingMovies,
      navigationOptions: ({navigation}) => ({
        title: 'Upcoming Movies',
        headerStyle: {
          backgroundColor: '#16171b',
        },
        headerTintColor: '#00cef3',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#00cef3'
        },
      }),
    },

    CinemaDetails: {
      screen: CinemaDetails,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#303337',
        },
        headerTintColor: '#fff',
        title: 'Cinema Details',
      }),
    },

    MovieDetails: {
      screen: MovieDetails,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#303337',
        },
        headerTintColor: '#fff',
        title: 'Movie Details'
      }),
    }

 }));
