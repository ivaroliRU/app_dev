import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//export the routes
export default createAppContainer(createStackNavigator({
    Home: {
      screen: ContactPage,
      navigationOptions: ({navigation}) => ({
        header: null,
    }),
        headerBackTitle: null,
    }
 }));
