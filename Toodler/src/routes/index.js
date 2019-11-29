import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button } from 'react-native';

//routes to views
import Main from '../views/MainPage';
import Boards from '../views/BoardPage';
import Help from '../views/HelpPage'

//export the routes
export default createAppContainer(createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: ({navigation}) => ({
        title: "Home",
        headerRight: <Button title="Help" onPress={() => navigation.navigate('Help')}/>,
    }),
        headerBackTitle: null,
    },
    Board: {
      screen: Boards,
      navigationOptions: ({navigation}) => ({
        title: `Board`,
        headerRight: <Button title="Help"  onPress={() => navigation.navigate('Help')}/>,
      }),
   },
   Help: {
     screen: Help,
     navigationOptions: () => ({
      title: `Help`,
    }),
   }
 }));
