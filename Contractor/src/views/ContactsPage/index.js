import React from 'react';
import { Text, View, Button } from 'react-native';
import AddNewContactModal from '../../components/addNewContactModal'


class Contacts extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  handleModal = (statement) => {
    this.setState({ modalVisible: statement });
  }

  render() {
    return (
      <View style={{margin:20}}>
        <AddNewContactModal isVisible={this.state.modalVisible} method={this.handleModal}/>
        <Button style={{marginLeft: 5, marginRight: 5}} title="Add New Contact" onPress={() => this.handleModal(true)}/>
      </View>
    )
  }
};


export default Contacts;
