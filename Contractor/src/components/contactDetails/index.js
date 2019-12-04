import React from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { getAllData } from '../../services/contactsService';
import { Icon } from 'react-native-elements'
import styles from './styles';
import { connect } from 'react-redux';
import { updateContacts } from '../../actions/contactActions';
import ContactCard from '../contactCard';
import ContactList from '../contactList';

class ContactDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      visable: false,
    }
  }
  handleModal = (statement) => {
    this.setState({ visable: statement });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: this.props.contacts.image}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}> {this.props.contacts.name} </Text>
              <Text style={styles.info}> {this.props.contacts.phone} </Text>
            </View>
            <View style={styles.icon}>
              <Icon name='edit' type='font-awesome'
              onPress={() => {this.handleModal(true)}} />
            </View>
          </View>
      </View>

    );
  }
}


export default ContactDetails;
