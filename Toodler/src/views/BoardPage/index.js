
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Toolbar from '../../components/Toolbar';
import List from '../../components/list';
import ListOfLists from '../../components/listOfLists';
import AddIcon from '../../components/addIcon';
import NewBoardModal from '../../components/newBoardModal';

class Board extends React.Component {
  render() {
    const { navigation } = this.props;
    const board = navigation.getParam('board', 'NO-ID');

    return (
      <View style={styles.container}>
        {/*<Toolbar />*/}
        {/*<List lists={ Data.lists } />*/}
        <Text>{board.name}</Text>
        <ListOfLists id={board.id} />
        <AddIcon />
<<<<<<< HEAD
=======
        {/*<NewBoardModal />*/}
>>>>>>> 87a092e78c33f77b2de226aee465634e3dac8472
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
