import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Button, Modal, Text, View } from 'react-native';
import BoardList from '../../components/boardlist';
import AddBoardModal from '../../components/addBoardModal'
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
        {/*<AddBoardModal />*/}
        <Button 
        style={StyleSheet.Button} 
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