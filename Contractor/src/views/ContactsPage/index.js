import React from 'react';
import { Text, View, Button } from 'react-native';
import AddNewContactModal from '../../components/addNewContactModal'
import { updateContacts } from '../../actions/contactActions';
import { connect } from 'react-redux';

class Contacts extends React.Component {
  constructor (props) {
    super(props);

    this.props.updateContacts();
    console.log(this.props.contacts);

    this.state = {
      modalVisible: false
    };
  }

  handleModal = (statement) => {
    this.setState({ modalVisible: statement });
  }

  render () {
    return (
      <View>
        <AddNewContactModal isVisible={this.state.modalVisible} method={this.handleModal}/>
        <Button title="Add Contact" onPress={() => this.handleModal(true)}/>
        {this.props.contacts.map((l) => (<Text>ASDF</Text>))}
      </View>
    )
  }
};

function mapStateToProps(state){  
  return{
    contacts: state.contacts
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateContacts: () => {
      dispatch(updateContacts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);