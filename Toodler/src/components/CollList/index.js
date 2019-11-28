import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CollapsibleList from "react-native-collapsible-list";
import Task from '../task';
import { deleteTask, getAllTasksFromList, getAllListsFromBoard } from '../../services/taskService';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import CreateTaskModal from '../createTaskModal';
import { Icon } from 'react-native-elements'

class CollList extends Component {
  constructor (props) {
    super(props);

    //binding this to the methods
    this.deleteTask = this.deleteTask.bind(this);
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.createTask = this.createTask.bind(this);
    this.hideModal = this.hideModal.bind(this);

    //set the state of the tasks and modals
    this.state = {
      items: getAllTasksFromList(this.props.list.id),
      modalVisible: false,
    };
  }

  onSwipeLeft(gestureState) {
    //this.props.deleteMethod(this.props.list.id);
  }

  deleteTask(id){
    deleteTask(id);
    this.setState({ items: getAllTasksFromList(this.props.list.id) });
  }

  createTask(){
    this.setState({ modalVisible: true });
  }


  hideModal(){
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <GestureRecognizer onSwipeLeft={this.onSwipeLeft}>
        <CollapsibleList

        numberOfVisibleItems={0}
        wrapperStyle={styles.wrapperCollapsibleList}
        buttonContent={
          <View style={styles.button}>
          <Icon name='edit' type='font-awesome' />
            <Text style={styles.buttonText}>{this.props.list.name} </Text>
          </View>
        }
      >
        {
          this.state.items.map((l) => (
            <Task task={l} key={l.id} method={this.deleteTask} />
          ))
        }
        <Button
          title="Create A Task"
          onPress={this.createTask}
        />
        <CreateTaskModal method={this.hideModal} visible={this.state.modalVisible} lists={getAllListsFromBoard(this.props.list.boardId)} />
    </CollapsibleList>
    </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  wrapperCollapsibleList: {
    minHeight: 40,
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginLeft: 14,
    marginRight: 15,
    shadowColor: "#000",
      shadowOffset: {
          width: 1.5,
          height: 0.5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
    padding: 10
  },
  button:{
    justifyContent: 'center',
    height: 55
  },
  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
  }
});

export default CollList;
