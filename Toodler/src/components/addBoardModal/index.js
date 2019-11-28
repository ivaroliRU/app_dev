import React from 'react';
import {View, TextInput } from 'react-native';
import Modal, { ModalContent, ModalButton, ModalFooter } from 'react-native-modals'
import { addBoard } from '../../services/taskService';
import { connect } from 'react-redux';



// This component is responsible for modal that creates a new
class addNewBoardModal extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        name: '',
        image: ''
      };
    }

    addToState(){
        this.props.addBoard(this.state.name, this.state.image);
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
                            placeholder = 'Enter the name of your board.'
                            autoCapitalize="sentences"
                            autoCompleteType="name"
                            onChangeText={(input) => this.setState({name: input})}>
                        </TextInput>
                        <TextInput
                            placeholder = 'Insert Image URI'
                            onChangeText={(text) => this.setState({image: text})}>
                        </TextInput>
                    </ModalContent>
                    <ModalFooter>
                        <ModalButton
                        text="CANCEL"
                        onPress={() => {this.props.method(false)}}
                        />
                        <ModalButton
                        text="OK"
                        onPress={() => {this.addToState()}} //() => {this.props.method(false) , addBoard(this.state.name, this.state.image)}}
                        />
                    </ModalFooter>
                    </View>
                </Modal>
        )
    } 
};

function mapDispatchToProps(dispatch){
    return {
         addBoard : (name, thumbnailPhoto) => dispatch({type: 'ADD_BOARD', name: name, thumbnailPhoto: thumbnailPhoto })
    }
}

export default connect(null, mapDispatchToProps)(addNewBoardModal);