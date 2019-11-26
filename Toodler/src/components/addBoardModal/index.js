import React from 'react';
import { Modal, View } from 'react-native';
import { ModalTitle, ModalContent, ModalButton, ModalFooter } from 'react-native-modals';
import InputBoardName from '../../components/inputBoardName';

class Board extends React.Component {
    render() {
        return (
            <Modal 
            modalTitle={<ModalTitle title="Create New Board" />} 
            visible = {this.state.modalVisible}
            style = {styles.container}>
            <View style = {styles.modal}>
            <ModalContent>
                <InputBoardName />
            </ModalContent>
            <ModalFooter>
                <ModalButton
                text="CANCEL"
                onPress={() => {this.setState({ modalVisible: !this.state.modalVisible})}}
                />
                <ModalButton
                text="OK"
                onPress={() => {}}
                />
            </ModalFooter>
            </View>
            </Modal>
        );
    }
}