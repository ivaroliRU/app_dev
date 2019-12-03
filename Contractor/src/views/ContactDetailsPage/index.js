import React from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import { getAllData } from '../../services/contactsService';
import ContactDetails from '../../components/contactDetails';
import ContactList from '../../components/contactList';
import { updateContacts } from '../../actions/contactActions';

const contacts = updateContacts();

class ContactDetailsPage extends React.Component {
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
      <SafeAreaView style={{backgroundColor: '#E1E8EE'}}>
        <ScrollView>
            <ContactDetails contacts={contacts}/>
        </ScrollView>
      </SafeAreaView>
    )
  }
};

export default ContactDetailsPage;
