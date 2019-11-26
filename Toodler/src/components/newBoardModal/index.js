import React from 'react';
import { Modal, View, Button} from 'react-native'
import { StyleSheet } from 'react-native';

class NewBoardModal extends React.Component {
    render() {
        return(
            <Modal 
                modalTitle={<ModalTitle title="Create New Board" />} 
                onTouchOutside={() => {this.setState({ visible: false });}
                }>
                    <ModalContent>
                        <Text>
                            Empty!
                        </Text>
                    </ModalContent>

                    <ModalFooter>
                    <ModalButton
                    text="CANCEL"
                    onPress={() => {}}
                    />
                    <ModalButton
                    text="OK"
                    onPress={() => {}}
                    />
                </ModalFooter>
                </Modal>
        )
    };
};

export default NewBoardModal;