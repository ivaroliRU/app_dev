import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Platform } from '@unimodules/core';

export default class App extends React.Component {
  state = {
    search: ''
  };

  updateSearch = search => {
    this.setState({ search });
  };


  render() {

    return (
      <SearchBar
        placeholder="Search Contact...."
        onChangeText={this.updateSearch, this.props.filterList} // this.props.handlechange
        value={this.state.search}
        lightTheme
      />
    );
  }
}