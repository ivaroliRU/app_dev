import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Button, Modal, Text, View } from 'react-native';
import { ModalContent, ModalTitle, ModalButton, ModalFooter} from 'react-native-modals'
import BoardList from '../../components/boardlist';
import InputBoardName from '../../components/inputBoardName'
import { getAllBoards } from '../../services/taskService';

const boards = getAllBoards();

class Main extends React.Component {
  state = {
    modalVisible: false,
  };

  render() {
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BoardList boards={boards} />
        <Modal 
            modalTitle={<ModalTitle title="Create New Board" />} 
            visible = {this.state.modalVisible}
            style = {styles.container}>
            <View style = {styles.modal}>
            <ModalContent>
                <InputBoardName />
            </ModalContent>
            <ModalFooter>
                <ModalButton
                text="CANCEL"
                onPress={() => {this.setState({ modalVisible: !this.state.modalVisible})}}
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
    marginTop: '500px',
    borderWidth: 1,
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