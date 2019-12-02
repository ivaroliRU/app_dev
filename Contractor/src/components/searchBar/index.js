import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Platform } from '@unimodules/core';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search Contact...."
        onChangeText={this.updateSearch}
        value={search}
        lightTheme = "default"
      />
    );
  }
}