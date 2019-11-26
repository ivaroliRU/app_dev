
import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Toolbar from '../../components/Toolbar';
import List from '../../components/list';
import ListOfLists from '../../components/listOfLists';
import AddIcon from '../../components/addIcon';

class Board extends React.Component {
  render() {
    const { navigation } = this.props;
    const board = navigation.getParam('board', 'NO-ID');

    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: board.thumbnailPhoto }}
          style={{
            height: 150,
            width: '100%',
            position: 'relative',
            top: 0,
            left: 0,
            justifyContent: 'center', alignItems: 'center'
          }}
        >
          <View style={{position: "absolute", left: 0, right: 0, alignItems: "center"}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 1,
              textShadowColor: '#000',
            }}
          >
            {board.name}
          </Text>
          </View>
        </ImageBackground>
        <ListOfLists id={board.id} />
        <AddIcon />
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
