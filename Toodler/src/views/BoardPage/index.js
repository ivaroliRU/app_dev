import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Button, View, Text, TextInput, ImageBackground } from 'react-native';
import {AddIcon} from '../../components/addIcon';
import ListOfLists from '../../components/listOfLists';
import CreateListModal from '../../components/createListModal';
import { getAllListsFromBoard, addList } from '../../services/taskService';

const lists = getAllListsFromBoard();

class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  handleModal = (statement) => {
    this.setState({ modalVisible: statement });
  }

  render() {
    const { navigation } = this.props;
    const board = navigation.getParam('board', 'NO-ID');
    console.log(this.state);
    

    return (

      <ScrollView style={styles.container}>
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
            }} >
            {board.name}
          </Text>
          </View>
        </ImageBackground>
        <ListOfLists id={board.id} style={styles.list} />
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollView}>
          <CreateListModal method={this.handleModal} isVisible={this.state.modalVisible} hvadagera="ADD_LIST" placeholder="Enter the name of your list." />
          <Button style={styles.container} title="Add List" onPress={() => this.handleModal(true)}/>
        </View>
      </SafeAreaView>
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  },
  button:{
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  scrollView: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  }
});

export default Board;
