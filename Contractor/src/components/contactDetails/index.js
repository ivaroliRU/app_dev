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
import AddNewContactModal from '../addNewContactModal'

const defaultImage = 'https://image.shutterstock.com/image-photo/handsome-unshaven-young-darkskinned-male-260nw-640011838.jpg'

class ContactDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      visable: false,
      modalVisible: false
    }
  }
  handleModal = (statement) => {
    this.setState({ modalVisible: statement });

  }
  /*
  handleModal = (statement) => {
    this.setState({ visable: statement });
  }*/

  makeCall = (number) => {
    const args = {
        number: number, // String value with the number to call
        prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
    }
   call(args).catch(console.error)
  }

  render() {
    const image = (this.props.contacts.image)?this.props.contacts.image:defaultImage;
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: image}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <Text style={styles.name}> {this.props.contacts.name} </Text>
            <View style={styles.phoneContainer}>
              <TouchableOpacity onPress={()=> this.makeCall(this.props.contacts.phone)}><Text style={styles.info}>{this.props.contacts.phone}</Text>
              <Icon color='#00BFFF' name='phone-square' type='font-awesome' onPress={() => this.makeCall(this.props.contacts.phone)} /></TouchableOpacity>
            </View>
            </View>
            <View style={styles.icon}>
              <Icon name='edit' type='font-awesome' onPress={() => {this.handleModal(true)}} />
            </View>
          </View>
      </View>

    );
  };
}


export default ContactDetails;
