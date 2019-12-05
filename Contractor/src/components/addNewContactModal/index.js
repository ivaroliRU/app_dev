import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput, Text } from 'react-native';
import Modal, { ModalContent, ModalButton, ModalFooter, ModalTitle } from 'react-native-modals';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import { connect } from 'react-redux';
import { addContactToState } from '../../actions/contactActions';

// This component is responsible for modal that creates a new
class addNewBoardModal extends React.Component {
    constructor (props) {
      super(props);

      this.handleCreate = this.handleCreate.bind(this);
      this.takePhoto = this.takePhoto.bind(this);
      this.selectFromCameraRoll = this.selectFromCameraRoll.bind(this);

      console.log(this.props.type);

      //the state of the moal holds the info to add
      this.state = {
        name: this.props.placeholder1,
        image: this.props.placeholder2,
        phonenumber: this.props.placeholder3
      };
    }

    // Take image and return the location of the image
    async takePhoto () {
        const photo = await takePhoto()
        this.setState({image:photo});
    }

    // Select image from the camera roll and return the location
    async selectFromCameraRoll () {
        const photo = await selectFromCameraRoll()
        this.setState({image:photo});
    }

    // handles adding a contact to the global state
    handleCreate(){
        this.props.addContactToState(this.state.name, this.state.phonenumber, this.state.image);
        this.props.method(false);
    }

    // handles editing a contact in the state space and possibly in the file system
    handleModify(){
        //this.props.modifyContactToState(this.props.id, this.state.name, this.state.phonenumber, this.state.image);
        //this.props.method(false);
    }

    render() {
        return (
            <Modal
                visible={this.props.isVisible}
                onTouchOutside={() => {
                    this.props.method(false);
                }}
                modalTitle={<ModalTitle title={(this.props.type === "ADD_CONTACT")?"Edit Contact":"Create a new contact"} />}
                >
                <View>
                    <ModalContent style={{minWidth: '80%'}}>
                    <Text>Name</Text>
                    <TextInput

                            placeholder = {(this.props.contactName)?this.props.contactName:'Name of the new contact'}
                            autoCapitalize="sentences"
                            autoCompleteType="name"
                            onChangeText={(input) => this.setState({name: input})}>
                        </TextInput>
                        <Text>Phone Number</Text>
                        <TextInput
                            placeholder = {(this.props.contactPhone)?this.props.contactPhone:'Phone number of the new contact'}
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
                        onPress={() => {this.props.method(false), (this.props.type == "ADD_CONTACT")?this.handleCreate():this.handleModify()}}
                        />
                    </ModalFooter>
                    </View>
                </Modal>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addContactToState: (name, phone, image) => dispatch(addContactToState(name, phone, image)),
        modifyContactToState: (formerName, name, phone, image) => dispatch((formerName, name, phone, image))
    };
  };

export default connect(null, mapDispatchToProps)(addNewBoardModal);
