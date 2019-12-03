import React from 'react';
import { Text, View, Button } from 'react-native';
import AddNewContactModal from '../../components/addNewContactModal'
import { updateContacts } from '../../actions/contactActions';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';

class Contacts extends React.Component {
  constructor (props) {
    super(props);

    this.props.updateContacts();

    this.state = {
      search: '',
      filterd: [],
      modalVisible: false,
    };
  }

  updateSearch = search => {
    this.setState({ search });
    this.filterList( search )
  };


  handleModal = (statement) => {
    this.setState({ modalVisible: statement });
    this.props.updateContacts();
  }

  filterList = e => {
    this.setState({filterd: []})
    const unfilterd = this.props.contacts
    e = e.toLowerCase()
    const regex = new RegExp(e, "i")
    const updatedList = unfilterd.filter(item => {
      return item.name.toLowerCase().search(regex) !== -1;
    });
    this.setState({ filterd: updatedList });
    console.log(this.state.filterd)
  };

  render () {
    return (
      <View>
      <SearchBar
        placeholder="Search Contact...."
        onChangeText={this.updateSearch}
        value={this.state.search}
        lightTheme
      />
      <View style={{margin:20}}>
        {this.props.contacts.map((l) => (
          <Text key={l.phone}>{l.name + " - " + l.phone + " - " + l.image}</Text>
        ))}
        <AddNewContactModal isVisible={this.state.modalVisible} method={this.handleModal}/>
        <Button style={{marginLeft: 5, marginRight: 5}} title="Add New Contact" onPress={() => this.handleModal(true)}/>
      </View>
      </View>
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
