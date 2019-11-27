import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Button, Text, View, TextInput } from 'react-native';
import Modal, { ModalContent, ModalTitle, ModalButton, ModalFooter} from 'react-native-modals'
import BoardList from '../../components/boardlist';
import NewBoardModal from '../../components/addBoardModal';
import { getAllBoards, addBoard } from '../../services/taskService';

const boards = getAllBoards();

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible:  false
    }
  }

  closeModal = (statement) => {
    this.setState({ modalVisible: statement });
  }

  render() {
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BoardList boards={boards} />
        <NewBoardModal method={this.closeModal} isVisible={this.state.modalVisible} />
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
