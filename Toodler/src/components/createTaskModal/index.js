import Modal, { ModalContent, ModalTitle, ModalButton, ModalFooter} from 'react-native-modals';
import { View, Picker, TextInput, Text, Button } from "react-native";
import { connect } from 'react-redux';
import React from 'react';

class CreateTaskModal extends React.Component {
    constructor (props) {
        super(props);      

        this.createTask = this.createTask.bind(this);
        this.intermediate = this.intermediate.bind(this);
        
        //if we have a task name or description then we chose that by default
        this.state = {
          name: (this.props.task)?this.props.task.name:'',
          description: (this.props.task)?this.props.task.description:'',
          list: this.props.list.id,
        };
    }

    async intermediate(){
      await this.props.method(false);
      this.createTask();
    }

    //add or modify the task
    createTask(){
      if(this.state.name.length > 0){
        if(this.props.type == 'mod'){
          //let the modal diapear before changing the state...
          setTimeout(
            () => this.props.modTask(this.props.task.id, this.state.name, this.state.description, this.state.list, this.props.task.isFinished),
            100
          );
        }
        else if (this.props.type == 'add'){
          this.props.addTask(this.state.name, this.state.description, this.state.list);
        }
      }
    }

    render() {
        return(
        <Modal
        visible={this.props.visible}
        onTouchOutside={() => {this.props.method(false)}}
        modalTitle={<ModalTitle title={(this.props.type == 'mod')?"Edit a task":"Create a new task"} />}
      >
        <ModalContent style={{minWidth:300}}>
            <View>
                <Text>Name</Text>
                <TextInput placeholder={(this.props.task)?this.props.task.name:'Insert name of task'} onChangeText={(input) => this.setState({name: input})} />
                <Text>Description</Text>
                <TextInput placeholder={(this.props.task)?this.props.task.description:'Insert description of task'} onChangeText={(input) => this.setState({description: input})} />
                {
                  //if we are modifying the task then we can change lists
                  this.props.type == 'mod' && 
                    <Text>List</Text> &&          
                    <Picker 
                        selectedValue={this.state.list}
                        style={{height: 50, width: 200}}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({list: itemValue, pickedList: itemIndex})
                        }>
                        { 
                            //filter out lists that are in other boards
                            this.props.lists.filter(l => l.boardId == this.props.list.boardId).map((l) => (
                                <Picker.Item label={l.name} value={l.id} key={l.id} />
                            ))
                        }
                    </Picker>
                }
            </View>
        </ModalContent>
        <ModalFooter>
              <ModalButton
              text="CANCEL"
              onPress={() => this.props.method(false)}
              />
              <ModalButton
              text="OK"
              onPress={this.intermediate}
              />
          </ModalFooter>
        </Modal>
        );
    }
}

function mapStateToProps(state){  
  return{
    lists: state.list,
    tasks: state.task,
  };
}

//map available actions to the component 
function mapDispatchToProps(dispatch){
  return {
       addTask : (name, description, listId) => dispatch({type: 'ADD_TASK', name: name, description: description, listId: listId }),
       modTask : (id, name, description, listId, isFinished) => dispatch({type: 'MODIFY_TASK', id:id, name: name, description: description, listId: listId, isFinished:isFinished })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskModal);