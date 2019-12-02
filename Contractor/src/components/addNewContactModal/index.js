import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput, Text } from 'react-native';
import Modal, { ModalContent, ModalButton, ModalFooter, ModalTitle } from 'react-native-modals';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import { connect } from 'react-redux';
import {addContactToState} from '../../actions/contactActions';

// This component is responsible for modal that creates a new
class addNewBoardModal extends React.Component {
    constructor (props) {
      super(props);

      this.handleCreate = this.handleCreate.bind(this);

      //the state of the moal holds the info to add
      this.state = {
        name: '',
        image: '',
        phonenumber: ''
      };
    }

    async takePhoto () {
        const photo = await takePhoto()
        console.log(photo.uri)
        return photo
    }

    async selectFromCameraRoll () {
        const photo = await selectFromCameraRoll()
        console.log(photo.uri)
        return photo
    }

    // handles adding a contact to the global state
    handleCreate(){
        console.log(this.state.image);
        
        this.props.addContactToState(this.state.name, this.state.phonenumber, "testimg");
        this.props.method(false);
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
                        <Icon name="camera" size={50} style={{marginLeft: '10%'}} onPress={() => this.setState({image: this.takePhoto()})} />
                        <Icon name="image" size={50} style={{marginLeft: '30%'}} onPress={() => this.setState({image: this.selectFromCameraRoll()})} />
                        </View>
                    </ModalContent>
                    <ModalFooter>
                        <ModalButton
                        text="CANCEL"
                        onPress={() => {this.props.method(false)}}
                        />
                        <ModalButton
                        text="OK"
                        onPress={() => {this.handleCreate()}}
                        />
                    </ModalFooter>
                    </View>
                </Modal>
        )
    } 
};

const mapDispatchToProps = dispatch => {
    return {
        addContactToState: (name,phone,image) => {dispatch(addContactToState(name,phone,image));}
    };
  };
  
  export default connect(null, mapDispatchToProps)(addNewBoardModal);
