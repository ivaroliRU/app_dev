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
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search Contact...."
        // Todo, onChangeText, async filter results.
        onChangeText={this.updateSearch}
        value={search}
<<<<<<< HEAD
        lightTheme = {true}
=======
        lightTheme
>>>>>>> abc6876f4c0141fec17aa3602f4db5e9f7c0a215
      />
    );
  }
}