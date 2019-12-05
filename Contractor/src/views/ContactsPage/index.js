import React from 'react';
import { Text, View, Button, SafeAreaView, ScrollView, TouchableHighlightBase } from 'react-native';
import AddNewContactModal from '../../components/addNewContactModal'
import { updateContacts } from '../../actions/contactActions';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import ContactList from '../../components/contactList';

class Contacts extends React.Component {
  constructor (props) {
    super(props);

    //get the initial contacts (defined in the os contacts and file system)
    this.props.updateContacts();

    this.state = {
      search: '',
      filterd: [],
      modalVisible: false,
    };
  }
  
  //update the inner state of the search filter
  updateSearch = search => {
    this.setState({ search });
    this.filterList( search )
  };

  //show or hide a modal
  handleModal = (statement) => {
    this.setState({ modalVisible: statement });
    this.props.updateContacts();
  }

  //apply filter to the current state defined in the state by the search bar
  filterList(e) {
    const unfilterd = this.props.contacts
    e = e.toLowerCase()

    const regex = new RegExp('.*' + e + '.*', "g")
    const updatedList = unfilterd.filter(item => {
      return item.name.toLowerCase().search(regex) !== -1;
    });

    this.setState({filterd:updatedList});
  };

  render () {
    return (
        <SafeAreaView style={{backgroundColor: '#E1E8EE', flex:1}}>
          <ScrollView>
          <SearchBar placeholder="Search Contact...." onChangeText={this.updateSearch} value={this.state.search} lightTheme />  
          <ContactList contacts={(this.state.search.length > 0)?this.state.filterd:this.props.contacts} />
          </ScrollView>
          <View style={{margin:20}}>
              <AddNewContactModal isVisible={this.state.modalVisible} method={this.handleModal} type="ADD_CONTACT" />
              <Button style={{marginLeft: 5, marginRight: 5}} title="Add New Contact" onPress={() => this.handleModal(true)}/>
            </View>
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
