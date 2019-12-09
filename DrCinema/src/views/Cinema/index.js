import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { updateAuthentication } from '../../actions/authenticationActions';
import { connect } from 'react-redux';

class Cinema extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
            Cinemas
        </Text>
      </View>
    )
  }
}

export default Cinema;


const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  },
  container: {
        flex: 1,
        height: 70,
        alignItems: 'center',
        height: 70,
        borderTopWidth: 30,
        borderTopColor: '#EEE',
        backgroundColor: '#FFF',
    }
})
