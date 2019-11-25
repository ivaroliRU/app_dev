
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



/*
const Board = ({ navigation: { navigate } }) => (
=======
const Boards = ({ navigation: { navigate } }) => (
>>>>>>> dc5658f8eac31321bc732cd7c9d13cf0ec36b0b5:Toodler/src/views/BoardPage/index.js
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

<<<<<<< HEAD:Toodler/src/views/Board/index.js
export default Board; */
=======
export default Boards;
>>>>>>> dc5658f8eac31321bc732cd7c9d13cf0ec36b0b5:Toodler/src/views/BoardPage/index.js
