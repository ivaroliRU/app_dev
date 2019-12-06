import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//routes to views
import LoginPage from '../veiws/LoginPage';

//export the routes
export default createAppContainer(createStackNavigator({
    Login: {
      screen: LoginPage,
      navigationOptions: ({navigation}) => ({
        header: null,
    }),
        headerBackTitle: null,
    },
 }));
