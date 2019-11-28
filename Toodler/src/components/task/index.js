import React, { Component } from "react";
import { StyleSheet, Text, View, CheckBox } from "react-native";
import CollapsibleList from "react-native-collapsible-list";
import { Icon } from 'react-native-elements'

class Task extends Component {
    render() {
      return (
        <CollapsibleList
        numberOfVisibleItems={0}
        wrapperStyle={styles.wrapperCollapsibleList}
        buttonContent={
          <View style={styles.wrapperTasks}>
            <CheckBox checked={this.props.task.isFinished} />
            <Text style={styles.taskItem} >{this.props.task.name}</Text>
            <Icon name='edit' type='font-awesome' />
            <Icon name='trash' type='font-awesome' onPress={() => this.props.method(this.props.task.id)} />
          </View>
        }
      >
        <Text style={styles.descriptionText}>{this.props.task.description}</Text>
    </CollapsibleList>
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
    },
    descriptionText:{
      fontSize: 14,
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#AAA',
      borderTopWidth: 1,
      borderTopColor: '#AAA'

    }
});

  export default Task;
