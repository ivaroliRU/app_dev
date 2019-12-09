import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../views/Home';

//export the routes
export default createAppContainer(createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        header: null,
    }),
        headerBackTitle: null,
    }
 }));
