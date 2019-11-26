import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Button, Text, View } from 'react-native';
import Modal, { ModalContent, ModalTitle, ModalButton, ModalFooter} from 'react-native-modals'
import BoardList from '../../components/boardlist';
import InputBoardName from '../../components/inputBoardName'
import { getAllBoards } from '../../services/taskService';

const boards = getAllBoards();

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  render() {
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BoardList boards={boards} />
        <Modal
          visible={this.state.modalVisible}
          onTouchOutside={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <View style = {styles.modal}>
            <ModalContent>
                <InputBoardName />
                <Button title="Choose photo" onPress={this.handleChoosePhoto}></Button>
            </ModalContent>
            <ModalFooter>
                <ModalButton
                text="CANCEL"
                onPress={() => {this.setState({ modalVisible: false })}}
                />
                <ModalButton
                text="OK"
                onPress={() => {}}
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
  modal: {  
    //marginTop: '500px',
    //borderWidth: 1,
    }, 
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