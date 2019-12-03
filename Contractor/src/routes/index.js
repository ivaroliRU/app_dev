import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//routes to views
import ContactPage from '../views/ContactsPage';
import ContactDetails from '../views/ContactDetailsPage';

//export the routes
export default createAppContainer(createStackNavigator({
    Contacts: {
      screen: ContactDetails,
      navigationOptions: ({navigation}) => ({
        title: "Contacts",
    }),
        headerBackTitle: null,
    },
    ContactDetails: {
      screen: ContactDetails,
      navigationOptions: ({navigation}) => ({
        title: `ContactDetails`,
      }),
   },
 }));
