import React from 'react';
import { Text, View, Button } from 'react-native';
import { getAllData } from '../../services/contactsService';
import { Icon } from 'react-native-elements'
import styles from './styles';
import { connect } from 'react-redux';
import { updateContacts } from '../../actions/contactActions';

class ContactDetails extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      visable: false,
    };
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


export default ContactDetails;
