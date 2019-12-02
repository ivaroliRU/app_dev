import React from 'react';
import { Text, ScrollView } from 'react-native';
import { getAllData } from '../../services/contactsService';
import DetailsPage from '../../components/DetailsPage';

const data = getAllData();

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

      <ScrollView>
        <DetailsPage data={data}/>
      </ScrollView>


    )
  }
};

export default ContactDetailsPage;
