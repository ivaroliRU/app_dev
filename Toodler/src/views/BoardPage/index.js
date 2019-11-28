
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Button, ScrollView } from 'react-native';
import Toolbar from '../../components/Toolbar';
import ListOfLists from '../../components/listOfLists';
import AddIcon from '../../components/addIcon';
import Modal, { ModalContent, ModalTitle, ModalButton, ModalFooter} from 'react-native-modals'
import { getAllListsFromBoard, addList } from '../../services/taskService';

const lists = getAllListsFromBoard();

class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false,
      name: '',
    };
  }

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
            }} >
            {board.name}
          </Text>
          </View>
        </ImageBackground>
        <ListOfLists id={board.id} />
        <ScrollView style ={styles.scrollView}>
        <Modal
          visible={this.state.modalVisible}
          onTouchOutside={() => {
            this.setState({ modalVisible: false });
          }} >
          <View style = {styles.modal}>
            <ModalContent>
            <TextInput
              placeholder = "Enter the name of your list"
              autoCapitalize="sentence"
              autoCompleteType="name"
              onChangeText = {(input) => this.setState({name: input})}>
            </TextInput>
            </ModalContent>
            <ModalFooter>
                <ModalButton
                text="CANCEL"
                onPress={() => {this.setState({ modalVisible: false })}}
                />
                <ModalButton
                text="OK"
                onPress={() => {this.setState({ modalVisible: false }), addList(this.state.name )}}
                />
            </ModalFooter>
          </View>
          </Modal>
          <Button
          style={styles.container}
          title="Add list"
          onPress={() => this.setState({ modalVisible:!this.state.modalVisible})} />
          </ScrollView>
        <AddIcon onPress={() => this.setState({ modalVisible:!this.state.modalVisible})}/>
      </View>

    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  },
  scrollView: {
    marginHorizontal: 20,
    flex: 1,
  }
});

export default Board;
