import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, TouchableOpacity, navigation } from 'react-native';
import { addContact, getAllData, cleanDirectory } from './src/services/contactsService';

export default function App(navigation) {
  getAllData();
    return (
      <View style={styles.container}>
        <TouchableOpacity onpress={() => {navigation.navigate('ContactPage')}}>
          <Text>Open up App.js to start working on your app!</Text>
        </TouchableOpacity>
      </View>
    );
  }
=======
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import AppContainer from './src/routes';
import reducers from './src/reducers';

const ConnectedApp = connect(null, null)(AppContainer);

export default function App() {
  return (
    <Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
      <ConnectedApp />
    </Provider>
  );
}
>>>>>>> f0f273f91daf0ceeb19eac024599f749d4ba8b08

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
