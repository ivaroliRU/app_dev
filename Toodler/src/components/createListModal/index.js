import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Modal, { ModalContent, ModalButton, ModalFooter } from 'react-native-modals'
import { connect } from 'react-redux';

class createListModal extends React.Component {
  constructor(props){    
    super(props)
    this.state = {
      name: this.props.placeholder
    };

    
  }
  addToState(){
      this.props.addList(this.state.name, this.props.boardId);
      this.props.method(false)
      console.log(this.props.lists)
  }

  modToState(){
      this.props.modList(this.props.id, this.state.name)
      this.props.method(false)
  }

  render() {
    return (
      <Modal
          visible={this.props.isVisible}
          onTouchOutside={() => {
              // below represents a parent method that closes the modal.
              this.props.method(false);
          }}
          >
          <View>
              <ModalContent style={{minWidth:300}}>
                  <Text>Name</Text>
                  <TextInput
                      placeholder = {this.props.placeholder}
                      autoCapitalize="sentences"
                      autoCompleteType="name"
                      onChangeText={(input) => this.setState({name: input})}>
                  </TextInput>
              </ModalContent>
              <ModalFooter>
                  <ModalButton
                  text="CANCEL"
                  onPress={() => {this.props.method(false)}}
                  />
                  <ModalButton
                  text="OK"
                  onPress={() => {(this.props.hvadagera == "ADD_LIST")?this.addToState():this.modToState()}}
                  />
              </ModalFooter>
              </View>
          </Modal>
    )
  }

}

function mapStateToProps(state){  
  return{
    lists: state.list,
    boards: state.boards,
  };
}

function mapDispatchToProps(dispatch){
    return {
         addList : (name, boardId) => dispatch({type: 'ADD_LIST', name: name, color: "#FFF", boardId: boardId}),
         modList : (id, name) => dispatch({type: 'MODIFY_LIST', id: id, name: name})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(createListModal);
