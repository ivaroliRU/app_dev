import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Button, Text, View, TextInput } from 'react-native';
import Modal, { ModalContent, ModalTitle, ModalButton, ModalFooter} from 'react-native-modals'
import BoardList from '../../components/boardlist';
import { getAllBoards, addBoard } from '../../services/taskService';

const boards = getAllBoards();

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false,
      name: '',
      image: ''
    };
  }

  render() {
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BoardList boards={boards} />
        <Modal
          visible={this.state.modalVisible}
          onTouchOutside={() => {this.setState({ modalVisible: false });}}>
          <View style = {styles.modal}>
            <ModalContent>
            <TextInput
                    placeholder = 'Enter the name of your board.'
                    autoCapitalize="sentences"
                    autoCompleteType="name"
                    onChangeText={(input) => this.setState({name: input})}>
                </TextInput>
                <TextInput
                    placeholder = 'Insert Image URI'
                    onChangeText={(text) => this.setState({image: text})}>
                </TextInput>
            </ModalContent>
            <ModalFooter>
                <ModalButton
                text="CANCEL"
                onPress={() => {this.setState({ modalVisible: false })}}
                />
                <ModalButton
                text="OK"
                onPress={() => {this.setState({ modalVisible: false }), addBoard(this.state.name, this.state.image)}}
                />
            </ModalFooter>
            </View>
        </Modal>
        <Button 
        style={styles.container} 
        title="Add Board" 
        onPress={() => this.setState({ modalVisible:!this.state.modalVisible})}
        />
      </ScrollView>
    </SafeAreaView>
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
      flex:1,
    },
  });

export default Main;