import React from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import { getAllData } from '../../services/contactsService';
import ContactDetails from '../../components/contactDetails';
import ContactList from '../../components/contactList';

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
    const { navigation } = this.props;
    const contact = navigation.getParam('contact', 'NO-ID');
    
    return (
      <SafeAreaView style={{backgroundColor: '#E1E8EE'}}>
        <ScrollView>
            <ContactDetails contacts={contact}/>
        </ScrollView>
      </SafeAreaView>
    )
  }
};

export default ContactDetailsPage;
