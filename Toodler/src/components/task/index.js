import React, { Component } from "react";
import CreateTaskModal from '../createTaskModal';
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from 'react-native-elements'
import CollapsibleList from "react-native-collapsible-list";
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { Audio } from 'expo-av';

class Task extends Component {
  constructor (props) {
    super(props);

    this.handleModal = this.handleModal.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

    //set the state of the tasks and modals
    this.state = { 
      modalVisible1: false
    };
  }

  async _playRecording() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/vel_gert.mp3'),
      {
        shouldPlay: true,
        isLooping: false,
      },
    );
    this.sound = sound;
    this.setState({
      playingStatus: 'playing'
    });
  }

  handleModal(visibility){
    this.setState({ modalVisible1: visibility });
  }

  async handleCheck(){
    this._playRecording();
  }

  render() {
    return (
      <CollapsibleList
      numberOfVisibleItems={0}
      wrapperStyle={styles.wrapperCollapsibleList}
      buttonContent={
        <View style={styles.wrapperTasks}>
          <CheckBox checked={this.props.task.isFinished} onValueChange={this.handleCheck} />
          <Text style={styles.taskItem} >{this.props.task.name}</Text>
          <Icon name='edit' type='font-awesome' onPress={() => this.handleModal(true)} />
          <Icon name='trash' type='font-awesome' onPress={() => this.props.deleteTask(this.props.task.id)} />
        </View>
        }
      >
        <Text style={styles.descriptionText}>{this.props.task.description}</Text>
        <CreateTaskModal method={this.handleModal} visible={this.state.modalVisible1} type='mod' list={this.props.list} task={this.props.task} key={1} />
      </CollapsibleList>
    );
  }
}

const styles = StyleSheet.create({
    wrapperTasks: {
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
        backgroundColor: "#FFF",
        paddingLeft:10,
        paddingRight:10,
        paddingTop: 10,
        paddingBottom: 10
    },
    taskItem: {
        flexDirection:'column',
        marginLeft: 15,
        marginRight: 'auto',
        fontSize: 16,
        maxWidth: 220
    },
    descriptionText:{
      fontSize: 14,
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#AAA',
      borderTopWidth: 1,
      borderTopColor: '#AAA'

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
       deleteTask : (id) => dispatch({type: 'DELETE_TASK', id:id }),
       modTask : (id, name, description, listId, isFinished) => dispatch({type: 'MODIFY_TASK', id:id, name: name, description: description, listId: listId, isFinished:isFinished })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
