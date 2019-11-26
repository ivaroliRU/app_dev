import React, { Component } from "react";
import { StyleSheet, Text, View, CheckBox } from "react-native";
import { Icon } from 'react-native-elements'

class Task extends Component {
    render() {
      return (
        <View style={styles.wrapperTasks}>
            <CheckBox checked={this.props.task.isFinished} />
            <Text style={styles.taskItem} >{this.props.task.name}</Text>
            <Icon name='trash' type='font-awesome' />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    wrapperTasks: {
        flexWrap: 'wrap', 
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
        backgroundColor: "#FFF",
        paddingLeft:10,
        paddingRight:10,
        paddingTop: 10,
        paddingBottom: 10
    },
    taskItem: {
        flexDirection:'column',
        marginLeft: 15,
        marginRight: 'auto',
        fontSize: 16
    }
});

  export default Task;