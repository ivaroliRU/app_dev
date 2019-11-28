import React from 'react';
import {View, TextInput } from 'react-native';
import Modal, { ModalContent, ModalButton, ModalFooter } from 'react-native-modals'
import { addBoard } from '../../services/taskService';


// This component is responsible for modal that creates a new
class addNewBoardModal extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        name: '',
        image: ''
      };
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
                        onPress={() => {this.props.method(false) , addBoard(this.state.name, this.state.image)}}
                        />
                    </ModalFooter>
                    </View>
                </Modal>
        )
    } 
};

export default addNewBoardModal