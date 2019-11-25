
import React from 'react';
import { Text, View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import List from '../../components/List';
import Data from '../../../assets/data.json';

class Board extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Board page</Text>
        <Toolbar />
        <List lists={ Data.lists } />
      </View>
    )
  }
};

export default Board;



/*
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

export default Board; */
