import React from 'react';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
