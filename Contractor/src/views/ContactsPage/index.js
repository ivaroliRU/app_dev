import React from 'react';
import { Text, View, Button } from 'react-native';
import AddNewContactModal from '../../components/addNewContactModal'


class Contacts extends React.Component {
  constructor (props) {
    super(props);
    state = {
      modalVisible : false
    }
  }

  handleModal = (statement) => {
    this.setState({ modalVisible: statement });
  }

  render() {
    return (
      <View>
        <AddNewContactModal isVisible={this.state.modalVisible} method={this.handleModal}/>
        <Button title="Add Contact" onPress={() => this.handleModal(true)}/>
      </View>
    )
  }
};

export default Contacts;
