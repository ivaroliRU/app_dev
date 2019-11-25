import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//routes to views
import Main from '../views/Main';
import Board from '../views/Board';

//export the routes
export default createAppContainer(createStackNavigator({
    Main,
    Board
}));