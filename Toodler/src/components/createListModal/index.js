import React from 'react';
import { View, TextInput } from 'react-native';
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
      this.props.addList(this.state.name);
      this.props.method(false)
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
              <ModalContent>
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
                  onPress={() => {this.props.method(false), (this.props.hvadagera == "ADD_LIST")?this.addToState():this.modToState()}}
                  />
              </ModalFooter>
              </View>
          </Modal>
    )
  }

}
function mapDispatchToProps(dispatch){
    return {
         addList : (name) => dispatch({type: 'ADD_LIST', name: name}),
         modList : (id, name) => dispatch({type: 'MODIFY_LIST', id: id, name: name})
    }
}

export default connect(null, mapDispatchToProps)(createListModal);
