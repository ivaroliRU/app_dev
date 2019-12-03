import React from 'react';
import { Text, View, Button } from 'react-native';
import { getAllData } from '../../services/contactsService';
import ContactPage from '../contactPage';
import { Icon } from 'react-native-elements'
import styles from './styles';
import { connect } from 'react-redux';
import { updateContacts } from '../../actions/contactActions';

class ContactDetails extends React.Component {
  constructor (props) {
    super(props);

    this.getContact = this.getContact.bind(this);

    this.state = {
      visable: false,
    };
  }

  getContact() {
    return this.props.contacts.filter(contact => contact.contactId == this.props.id)
  }


  render() {
    return (
      <View style={styles.icon}>
          <Icon name='edit' type='font-awesome'
          onPress={() => {this.handleModal(true)}} />

      </View>

    );
  }
}
function mapStateToProps(state){
  return{
    contacts: state.contact
  };
}

export default connect(mapStateToProps)(ContactDetails);
