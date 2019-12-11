import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { updateCinemas } from '../../actions/cinemasActions';
import CinemaList from '../../components/cinemaList';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import styles from './styles';

class Cinema extends React.Component {
  constructor (props) {
    super(props);
    this.props.updateCinemas(this.props.token);

    this.updateSearch = this.updateSearch.bind(this);
    this.filterList = this.filterList.bind(this);

    this.state = {
      search: '',
      filterd: [],
    };
  }

  //update the inner state of the search filter
  updateSearch = search => {
    this.setState({ search });
    this.filterList( search )
  };

  //apply filter to the current state defined in the state by the search bar
  filterList(e) {
    const unfilterd = this.props.cinemas
    e = e.toLowerCase()

    const regex = new RegExp('.*' + e + '.*', "g")
    const updatedList = unfilterd.filter(item => {
      return item.name.toLowerCase().search(regex) !== -1;
    });

    this.setState({filterd:updatedList});
  };

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#16171b', flex:1}}>
      <SearchBar placeholder="Search Cinemas...." onChangeText={this.updateSearch} value={this.state.search} darkTheme 
                 containerStyle={styles.searchContainer} 
                 inputStyle={styles.searchBox}
                 inputContainerStyle={styles.searchBoxContainer} />
        <ScrollView style={styles.list}>
          <CinemaList cinemas={(this.state.search.length > 0)?this.state.filterd:this.props.cinemas} destination='CinemaDetails'/>
        </ScrollView>
      </SafeAreaView>
    )
  }
};

function mapStateToProps(state){
    return{
      token: state.authentication,
      cinemas: state.cinemas
    };
  }

const mapDispatchToProps = dispatch => {
    return {
        updateCinemas: (token) => {
        dispatch(updateCinemas(token));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Cinema);
