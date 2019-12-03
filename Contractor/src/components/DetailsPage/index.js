import React from 'react';
import { Text, View, Button } from 'react-native';
import { getAllData } from '../../services/contactsService';
import { Icon } from 'react-native-elements'
import styles from './styles';

class DetailsPage extends React.Component {
  constructor (props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
    this.state = {
      visable: false,
    };
  }

  handleModal = (statement) => {
      this.setState({ modalVisible: statement });
  }

  render() {
    return (
      <View style={styles.icon}>
          <Icon name='edit' type='font-awesome'
          onPress={() => {this.handleModal(true)}} />
      </View>

    )
  }
};

export default DetailsPage;
