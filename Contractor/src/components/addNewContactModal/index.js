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
      this.takePhoto = this.takePhoto.bind(this);
      this.selectFromCameraRoll = this.selectFromCameraRoll.bind(this);

      //the state of the moal holds the info to add
      this.state = {
        name: this.props.placeholder1,
        image: this.props.placeholder2,
        phonenumber: this.props.placeholder3
      };
    }

    async takePhoto () {
        const photo = await takePhoto()
        console.log(photo)
        this.setState({image:photo});
    }

    async selectFromCameraRoll () {
        const photo = await selectFromCameraRoll()
        console.log(photo)
        this.setState({image:photo});
    }

    // handles adding a contact to the global state
    handleCreate(){
        console.log(this.state.image);

        this.props.addContactToState(this.state.name, this.state.phonenumber, this.state.image);
        this.props.method(false);
    }
    handleModify(){
        this.props.modifyContactToState(this.props.id, this.state.name, this.state.phonenumber, this.state.image);
        this.props.method(false);
    }


    render() {
        return (
            <Modal
                visible={this.props.isVisible}
                onTouchOutside={() => {
                    this.props.method(false);
                }}
                modalTitle={<ModalTitle title={(this.props.hvadagera != "ADD_CONTACT")?"Edit Contact":"Create a new contact"} />}
                >
                <View>
                    <ModalContent style={{minWidth: '80%'}}>
                    <Text>Name</Text>
                    <TextInput

                            placeholder = {this.props.placeholder1}
                            autoCapitalize="sentences"
                            autoCompleteType="name"
                            onChangeText={(input) => this.setState({name: input})}>
                        </TextInput>
                        <Text>Phone Number</Text>
                        <TextInput
                            placeholder = {this.props.placeholder2}
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
                        onPress={() => {this.props.method(false), (this.props.hvadagera == "ADD_BOARD")?this.handleCreate():this.handleModify()}}
                        />
                    </ModalFooter>
                    </View>
                </Modal>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        //addContactToState: (name,phone,image) => {dispatch(addContactToState(name,phone,image));},
        addContactToState: (name, phone, image) => dispatch({type: 'ADD_BOARD', name: name, phone:phone, image:image}),

        modifyContactToState: (id, name, phone, image) => dispatch({type: 'MODIFY_BOARD', id:id, name:name, phone:phone, image:image})
    };
  };

export default connect(null, mapDispatchToProps)(addNewBoardModal);
