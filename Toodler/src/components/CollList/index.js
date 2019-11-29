import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CollapsibleList from "react-native-collapsible-list";
import Task from '../task';
import { deleteTask, getAllTasksFromList, getAllListsFromBoard } from '../../services/taskService';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import CreateTaskModal from '../createTaskModal';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import CreateListModal from '../createListModal';

class CollList extends Component {
  constructor (props) {
    super(props);

    //binding this to the methods
    this.getTasks = this.getTasks.bind(this);
    this.handleModal = this.handleModal.bind(this);    
    //set the state of the tasks and modals
    this.state = { 
      modalVisible: false
    };
  }
  handleModal = (statement) => {
      this.setState({ visable: statement });
  }

  //shows or hides the model
  handleModal(visibility){
    this.setState({ modalVisible: visibility});
  }

  //get the correct tasks for the list by the provided ID of the list
  getTasks(){
    return this.props.tasks.filter(t => t.listId == this.props.list.id)
  }
// <NewBoardModal method={this.handleModal} isVisible={this.state.visable} hvadagera="MODIFY_BOARD" placeholder1={this.props.board.name} placeholder2={this.props.board.thumbnailPhoto} id={this.props.board.id}/>
  render() {
    return (
      <React.Fragment>
      <CreateListModal method={this.handleModal} isVisible={this.state.modalVisable} hvadagera="MODIFY_LIST" placeholder={this.props.list.name}  id={this.props.list.id}/>
      <GestureRecognizer onSwipeLeft={()=>(this.props.deletelist(this.props.list.id))}>
        <CollapsibleList
        numberOfVisibleItems={0}
        wrapperStyle={styles.wrapperCollapsibleList}
        buttonContent={
          <View style={styles.button}>
            <Icon name='edit' type='font-awesome'
            onPress={() => {this.handleModal(true)}} />
            <Text style={styles.buttonText}>{this.props.list.name} </Text>
          </View>
        }
      >
        {
          this.getTasks().map((l) => (
            <Task task={l} key={l.id} method={this.handleModal} list={this.props.list} />
          ))
        }
        <Button
          title="Create A Task"
          onPress={() => this.handleModal(true, 'add')}
        />
        <CreateTaskModal method={this.handleModal} visible={this.state.modalVisible} type='add' list={this.props.list} />
    </CollapsibleList>
    </GestureRecognizer>
    </React.Fragment>
    );
  }
}


const styles = StyleSheet.create({
  wrapperCollapsibleList: {
    minHeight: 40,
    marginTop: 20,
    overflow: "hidden",
    // backgroundColor: "yellow",
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
    flexDirection:'row',
    height: 55,
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
    flexDirection:'column'
  },

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
