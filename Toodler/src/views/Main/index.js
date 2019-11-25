
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from '../../components/board';

const Main = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
      <Board onPress={() => this.props.navigation.navigate('Board')} />
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Main;