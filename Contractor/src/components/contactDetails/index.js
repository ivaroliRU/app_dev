import React from 'react';
import { Text, View, Button, Image, TouchableOpacity, TouchableHighlightBase } from 'react-native';
import { getAllData } from '../../services/contactsService';
import { Icon } from 'react-native-elements'
import styles from './styles';
import { connect } from 'react-redux';
import { updateContacts } from '../../actions/contactActions';
import ContactCard from '../contactCard';
import ContactList from '../contactList';
import {Linking} from 'react-native'
import call from 'react-native-phone-call'

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

  makeCall = (number) => {
    const args = {
        number: number, // String value with the number to call
        prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
   call(args).catch(console.error)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: this.props.contacts.image}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}> {this.props.contacts.name} </Text>
              <Text>Fyrri Prufa</Text>
              <Text onPress={()=>{Linking.openURL('tel:'+this.props.contacts.phone);}} style={styles.info}>{this.props.contacts.phone}</Text>
              <Text>Seinni Prufa</Text>
              <TouchableOpacity onPress={()=> this.makeCall(this.props.contacts.phone)}><Text style={styles.info}>{this.props.contacts.phone}</Text></TouchableOpacity>
            </View>
            <View style={styles.icon}>
              <Icon name='edit' type='font-awesome'
              onPress={() => {this.handleModal(true)}} />
            </View>
          </View>
      </View>

    );
  };
}


export default ContactDetails;
