import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Button } from 'react-native';
import BoardList from '../../components/boardlist';
import NewBoardModal from '../../components/addBoardModal';
import { getAllBoards, modifyBoard } from '../../services/taskService';

const boards = getAllBoards();

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible:  false
    }
  }

  handleModal = (statement) => {
    this.setState({ modalVisible: statement });
  }

  render() {
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BoardList boards={boards} />
        <NewBoardModal method={this.handleModal} isVisible={this.state.modalVisible} />
        <Button style={styles.container} title="Add Board" onPress={() => this.handleModal(true)}/>
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
