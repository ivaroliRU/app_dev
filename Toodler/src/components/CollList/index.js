import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CollapsibleList from "react-native-collapsible-list";
import Task from '../task';
import { deleteTask, getAllTasksFromList, getAllListsFromBoard } from '../../services/taskService';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import CreateTaskModal from '../createTaskModal';
import { connect } from 'react-redux';
 
class CollList extends Component {
  constructor (props) {
    super(props);
    
    //binding this to the methods
    this.getTasks = this.getTasks.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    //set the state of the tasks and modals
    this.state = { 
      modalVisible: false,
    };
  }

  //shows the model
  showModal(){
    this.setState({ modalVisible: true });
  }

  //hids the modal
  hideModal(){
    this.setState({ modalVisible: false });
  }

  //get the correct tasks for the list by the provided ID of the list
  getTasks(){
    return this.props.tasks.filter(t => t.listId == this.props.list.id)
  }

  render() {
    return (
      <GestureRecognizer onSwipeLeft={()=>(this.props.deletelist(this.props.list.id))}>
        <CollapsibleList
        numberOfVisibleItems={0}
        wrapperStyle={styles.wrapperCollapsibleList}
        buttonContent={
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.list.name}</Text>
          </View>
        }
      >
        {
          this.getTasks().map((l) => (
            <Task task={l} key={l.id} />
          ))
        }
        <Button
          title="Create A Task"
          onPress={this.createTask}
        />
        <CreateTaskModal hideMethod={this.hideModal} showMethod={this.showModal} visible={this.state.modalVisible} lists={getAllListsFromBoard(this.props.list.boardId)} />
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

//map the app state to the component
function mapStateToProps(state){  
  return{
    tasks: state.task
  };
}

//map available actions to the component 
function mapDispatchToProps(dispatch){
  return {
       deletelist : (id) => dispatch({type: 'DELETE_LIST', id:id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollList);