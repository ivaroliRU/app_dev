import React from 'react';
import {View, TextInput, Text } from 'react-native';
import Modal, { ModalContent, ModalButton, ModalFooter, ModalTitle } from 'react-native-modals'
import { connect } from 'react-redux';



// This component is responsible for modal that creates a new
class addNewBoardModal extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        name: this.props.placeholder1,
        image: this.props.placeholder2
      };
    }

    addToState(){
        this.props.addBoard(this.state.name, this.state.image);
        this.props.method(false)
    }

    modToState(){
        this.props.modBoard(this.props.id, this.state.name, this.state.image)
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
                modalTitle={<ModalTitle title={(this.props.hvadagera != "ADD_BOARD")?"Edit a board":"Create a new board"} />}
                >
                <View>
                    <ModalContent>
                    <Text>Name</Text>
                    <TextInput
                            placeholder = {this.props.placeholder1}
                            autoCapitalize="sentences"
                            autoCompleteType="name"
                            onChangeText={(input) => this.setState({name: input})}>
                        </TextInput>
                        <Text>Image url</Text>
                        <TextInput
                            placeholder = {this.props.placeholder2}
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
                        onPress={() => {this.props.method(false), (this.props.hvadagera == "ADD_BOARD")?this.addToState():this.modToState()}}
                        />
                    </ModalFooter>
                    </View>
                </Modal>
        )
    } 
};

function mapDispatchToProps(dispatch){
    return {
         addBoard : (name, thumbnailPhoto) => dispatch({type: 'ADD_BOARD', name: name, thumbnailPhoto: thumbnailPhoto }),
         modBoard : (id, name, thumbnailPhoto) => dispatch({type: 'MODIFY_BOARD', id: id, name: name, thumbnailPhoto: thumbnailPhoto})
    }
}

export default connect(null, mapDispatchToProps)(addNewBoardModal);