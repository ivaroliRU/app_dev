import React from 'react';
import { Modal, View, Button} from 'react-native'
import { StyleSheet } from 'react-native';
import { ModalTitle, ModalContent, ModalButton, ModalFooter } from 'react-native-modals';

class NewBoardModal extends React.Component {
    state = {
        modalVisible: false,
    };
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return(
            <View style={{marginTop: 22}}>
            <Modal 
                modalTitle={<ModalTitle title="Create New Board" />} 
                onTouchOutside={() => {this.setState({ visible: false })}
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
                </View>
        )
    };
};

export default NewBoardModal;