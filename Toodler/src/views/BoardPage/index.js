
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Toolbar from '../../components/Toolbar';
import List from '../../components/list';
import ListOfLists from '../../components/listOfLists';

class Board extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Toolbar />*/}
        {/*<List lists={ Data.lists } />*/}
        <ListOfLists id={1} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  }
});

export default Board;

