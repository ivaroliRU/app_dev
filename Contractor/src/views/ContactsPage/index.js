import React from 'react';
import { Text, View, Button, SafeAreaView, ScrollView, TouchableHighlightBase } from 'react-native';
import AddNewContactModal from '../../components/addNewContactModal'
import { updateContacts } from '../../actions/contactActions';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import ContactList from '../../components/contactList';
import ContactCard from '../../components/contactCard';

class Contacts extends React.Component {
  constructor (props) {
    super(props);

    this.props.updateContacts();

    this.state = {
      search: '',
      filterd: {},
      modalVisible: false,
    };

    this.setState({filterd: this.props.contacts})
  }
  
  updateSearch = search => {
    this.setState({ search });
    this.filterList( search )
  };


  handleModal = (statement) => {
    this.setState({ modalVisible: statement });
    this.props.updateContacts();
  }

  promisedSetState = (newState) => {
    return new Promise((resolve) => {
        this.setState(newState, () => {
            resolve()
        });
    });
}

    async filterList(e) {
    const unfilterd = this.props.contacts
    e = e.toLowerCase()
    const regex = new RegExp('.*' + e + '.*', "g")
    const updatedList = unfilterd.filter(item => {
      return item.name.toLowerCase().search(regex) !== -1;
    });
    await this.promisedSetState({filterd: updatedList})
  };

  render () {
    return (
        <SafeAreaView style={{backgroundColor: '#E1E8EE'}}>
          <ScrollView>
          <SearchBar placeholder="Search Contact...." onChangeText={this.updateSearch} value={this.state.search} lightTheme />
          {this.state.search != ''? <ContactList  contacts={await this.state.filterd} />: <ContactList contacts={this.props.contacts} />}
            <View style={{margin:20}}>
              <AddNewContactModal isVisible={this.state.modalVisible} method={this.handleModal}/>
              <Button style={{marginLeft: 5, marginRight: 5}} title="Add New Contact" onPress={() => this.handleModal(true)}/>
            </View>
          </ScrollView>
        </SafeAreaView>
    )
  }
};

function mapStateToProps(state){  
  return{
    contacts: state.contacts
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateContacts: () => {
      dispatch(updateContacts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
