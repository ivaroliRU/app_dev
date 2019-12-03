import React from 'react';
import { Text, ScrollView } from 'react-native';
import { getAllData } from '../../services/contactsService';
import ContactDetails from '../../components/contactDetails';

const data = getAllData();

class ContactDetailsPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false
    };

  }
  render() {
    return (
      <ScrollView>
        <ContactDetails data={data}/>
      </ScrollView>
    )
  }
};

export default ContactDetailsPage;
