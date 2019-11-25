import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//routes to views
import Main from '../views/MainPage';
import Boards from '../views/BoardPage';

//export the routes
export default createAppContainer(createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: () => ({
        title: `Home`,
        headerBackTitle: null,
      }),
    },
    Board: {
      screen: Boards,
      navigationOptions: () => ({
        title: `Board`,
      }),
   },
 }));
