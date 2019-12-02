import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Modal, { ModalContent, ModalButton, ModalFooter, ModalTitle } from 'react-native-modals'
import { connect } from 'react-redux';



// This component is responsible for modal that creates a new
class addNewBoardModal extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        name: '',
        image: '',
        phonenumber: ''
      };
    }

    addToState(){
        this.props.addContact(this.state.name, this.state.image, this.state.phonenumber);
        this.props.method(false)
    }

    render() {
        return (
            <Modal
                visible={this.props.isVisible}
                onTouchOutside={() => {
                    this.props.method(false);
                }}
                modalTitle={<ModalTitle title={'Add Contact'} />}
                >
                <View>
                    <ModalContent>
                    <Text>Name</Text>
                    <TextInput
                            placeholder = 'Name'
                            autoCapitalize="sentences"
                            autoCompleteType="name"
                            onChangeText={(input) => this.setState({name: input})}>
                        </TextInput>
                        <Text>Image</Text>
                        <TextInput
                            placeholder = 'TODO ADD IMPORT FROM PHONE'
                            onChangeText={(text) => this.setState({image: text})}>
                        </TextInput>
                        <Text>Phone Number</Text>
                        <TextInput
                            placeholder = 'Phone Number'
                            onChangeText={(phone) => this.setState({phonenumber: phone})}>
                        </TextInput>
                    </ModalContent>
                    <ModalFooter>
                        <ModalButton
                        text="CANCEL"
                        onPress={() => {this.props.method(false)}}
                        />
                        <ModalButton
                        text="OK"
                        onPress={() => {this.props.method(false)}}
                        />
                    </ModalFooter>
                    </View>
                </Modal>
        )
    } 
};

function mapDispatchToProps(dispatch){
    return {
         addContact : (name, photo, phoneNumber) => dispatch({type: 'ADD_CONTACT', name: name, image: photo, phone: phoneNumber }),
    }
}

export default connect(null, mapDispatchToProps)(addNewBoardModal);