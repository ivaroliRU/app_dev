import React from 'react';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
