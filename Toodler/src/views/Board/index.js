
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Board = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
      <Text>Board page</Text>
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

export default Board;