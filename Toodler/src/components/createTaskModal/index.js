import Modal, { ModalContent, ModalTitle, ModalButton, ModalFooter} from 'react-native-modals';
import { View, Picker } from "react-native";
import {  Input } from 'react-native-elements';
import React from 'react';

class CreateTaskModal extends React.Component {
    render() {
        return(
        <Modal
        visible={this.props.visible}
        onTouchOutside={this.props.method}
        modalTitle={<ModalTitle title="Create a new task" />}
        footer={
          <ModalFooter>
            <ModalButton
              text="CANCEL"
              onPress={this.props.method}
            />
            <ModalButton
              text="OK"
              onPress={this.props.method}
            />
          </ModalFooter>
        }
      >
        <ModalContent style={{minWidth:300}}>
            <View>
                <Input placeholder='Insert name of task' label='Name'/>
                <Input placeholder='Insert description of task' label='Description'/>
                <Picker
                    selectedValue={'Pick a list'}
                    style={{height: 50, width: 200}}>
                    {
                        this.props.lists.map((l) => (
                            <Picker.Item label={l.name} value={l.id} key={l.id} />
                        ))
                    }
                </Picker>
            </View>
        </ModalContent>
        </Modal>
        );
    }
}

export default CreateTaskModal;