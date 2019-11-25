
import React from 'react';
import { Text, View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import List from '../../components/List';
import Data from '../../../assets/data.json';

<<<<<<< HEAD:Toodler/src/views/Board/index.js
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