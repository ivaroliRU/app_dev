import Modal, { ModalContent, ModalTitle, ModalButton, ModalFooter} from 'react-native-modals';
import { View, Picker, TextInput } from "react-native";
import { connect } from 'react-redux';
import React from 'react';

class CreateTaskModal extends React.Component {
    constructor (props) {
        super(props);

        this.createTask = this.createTask.bind(this);

        this.state = {
          name: '',
          description: '',
          list: 0,
          pickedList: 'Choose a list'
        };
    }

    createTask(){
      this.props.addTask(this.state.name, this.state.description, this.state.list);
    }

    render() {
        return(
        <Modal
        visible={this.props.visible}
        onTouchOutside={() => {this.props.method(false)}}
        modalTitle={<ModalTitle title="Create a new task" />}
      >
        <ModalContent style={{minWidth:300}}>
            <View>
                <TextInput placeholder='Insert name of task' label='Name' onChangeText={(input) => this.setState({name: input})} />
                <TextInput placeholder='Insert description of task' label='Description' onChangeText={(input) => this.setState({description: input})} />
                <Picker
                    selectedValue={this.state.pickedList}
                    style={{height: 50, width: 200}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({list: itemValue, pickedList: itemIndex})
                    }>
                    {
                        this.props.lists.map((l) => (
                            <Picker.Item label={l.name} value={l.id} key={l.id} />
                        ))
                    }
                </Picker>
            </View>
        </ModalContent>
        <ModalFooter>
              <ModalButton
              text="CANCEL"
              onPress={() => {this.props.method(false)}}
              />
              <ModalButton
              text="OK"
              onPress={() => {this.props.addTask(this.state.name, this.state.list, this.state.description)}} //() => {this.props.method(false) , addBoard(this.state.name, this.state.image)}}
              />
          </ModalFooter>
        </Modal>
        );
    }
}

function mapStateToProps(state){  
  return{
    lists: state.list
  };
}

//map available actions to the component 
function mapDispatchToProps(dispatch){
  return {
       addTask : (name, description, boardId) => dispatch({type: 'ADD_TASK', name: name, description: description, boardId: boardId })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskModal);