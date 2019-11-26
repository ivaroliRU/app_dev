import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Icon, Fab } from 'native-base';

class AddIcon extends Component {
    render() {
      return (
        <Fab
        direction="up"
        style={{ backgroundColor: '#82b6ff' }}
        position="bottomRight">
            <Icon name="add" />
        </Fab>
      );
    }
}

const styles = StyleSheet.create({
});

export default AddIcon;