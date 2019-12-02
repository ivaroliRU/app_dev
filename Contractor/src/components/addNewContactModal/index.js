import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput, Text } from 'react-native';
import Modal, { ModalContent, ModalButton, ModalFooter, ModalTitle } from 'react-native-modals';
import { connect } from 'react-redux';
import addContact from '../../services/contactsService';

// This component is responsible for modal that creates a new
class addNewBoardModal extends React.Component {
    constructor (props) {
      super(props);
      this.addContact = addContact
      this.state = {
        name: '',
        image: '',
        phonenumber: ''
      };
    }

    addToState(){
        this.addContact(this.state.name, this.state.image, this.state.phonenumber);
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
                    <ModalContent style={{minWidth: '80%'}}>
                    <Text>Name</Text>
                    <TextInput
                            placeholder = 'Name'
                            autoCapitalize="sentences"
                            autoCompleteType="name"
                            onChangeText={(input) => this.setState({name: input})}>
                        </TextInput>
                        <Text>Phone Number</Text>
                        <TextInput
                            placeholder = 'Phone Number'
                            onChangeText={(phone) => this.setState({phonenumber: phone})}>
                        </TextInput>
                        <Text style={{marginBottom: '5%'}}>Image</Text>
                        <View style={{flexDirection: "row", alignContent:"space-around"}}>
                        <Icon name="camera" size={50} style={{marginLeft: '10%'}} />
                        <Icon name="image" size={50} style={{marginLeft: '30%'}}/>
                        </View>
                    </ModalContent>
                    <ModalFooter>
                        <ModalButton
                        text="CANCEL"
                        onPress={() => {this.props.method(false)}}
                        />
                        <ModalButton
                        text="OK"
                        onPress={() => {this.addToState()}}
                        />
                    </ModalFooter>
                    </View>
                </Modal>
        )
    } 
};

// function mapDispatchToProps(dispatch){
//     return {
//          addContact : (name, photo, phoneNumber) => dispatch({type: 'ADD_CONTACT', name: name, image: photo, phone: phoneNumber }),
//     }
// }

export default addNewBoardModal;