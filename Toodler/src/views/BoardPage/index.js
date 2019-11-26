
import React from 'react';
import { Text, View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import List from '../../components/list';
import ListOfLists from '../../components/listOfLists';
import NewBoardModal from '../../components/newBoardModal';

class Board extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/*<Toolbar />*/}
        {/*<List lists={ Data.lists } />*/}
        
        <ListOfLists id={this.props.id} />
        <NewBoardModal />
      </View>
      
    )
  }
};

export default Board;

