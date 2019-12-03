import React from 'react';
import { Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
import AddNewContactModal from '../../components/addNewContactModal'
import SearchBar from '../../components/searchBar'
import { updateContacts } from '../../actions/contactActions';
import { connect } from 'react-redux';
import ContactList from '../../components/contactList';
import ContactCard from '../../components/contactCard';

class Contacts extends React.Component {
  constructor (props) {
    super(props);

    this.props.updateContacts();

    this.state = {
      modalVisible: false
    };
  }

  handleModal = (statement) => {
    this.setState({ modalVisible: statement });
    this.props.updateContacts();
  }

  render () {
    return (
      <View>
        <SearchBar />
        <ContactList contacts={this.props.contacts} />
        <View style={{margin:20}}>
          <AddNewContactModal isVisible={this.state.modalVisible} method={this.handleModal}/>
          <Button style={{marginLeft: 5, marginRight: 5}} title="Add New Contact" onPress={() => this.handleModal(true)}/>
        </View>
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
