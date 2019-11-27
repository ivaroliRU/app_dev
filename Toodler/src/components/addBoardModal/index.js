import React from 'react';
import {View, TextInput } from 'react-native';
import Modal, { ModalContent, ModalTitle, ModalButton, ModalFooter} from 'react-native-modals'
import { addBoard } from '../../services/taskService';

class addNewBoardModal extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        modalVisible: true,
        name: '',
        image: ''
      };
    }

    render() {
        return (
            <Modal
                visible={this.state.modalVisible}
                onTouchOutside={() => {
                    this.setState({ modalVisible: false });
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
                        onPress={() => {this.setState({ modalVisible: false })}}
                        />
                        <ModalButton
                        text="OK"
                        onPress={() => {this.setState({ modalVisible: false }), addBoard(this.state.name, this.state.image)}}
                        />
                    </ModalFooter>
                    </View>
                </Modal>
        )
    } 
};

export default addNewBoardModal