import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CollapsibleList from "react-native-collapsible-list";
import Task from '../task';
 
class CollList extends Component {
  render() {
    return (
        <CollapsibleList
        numberOfVisibleItems={0}
        wrapperStyle={styles.wrapperCollapsibleList}
        buttonContent={
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.listName}</Text>
          </View>
        }
      >
        {
          this.props.listItems.map((l) => (
            <Task task={l} key={l.id} />
          ))
        }
    </CollapsibleList>
    );
  }
}
 
const styles = StyleSheet.create({
  wrapperCollapsibleList: {
    minHeight: 40,
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginLeft: 14,
    marginRight: 15,
    shadowColor: "#000",
      shadowOffset: {
          width: 1.5,
          height: 0.5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
    padding: 10
  },
  button:{
    justifyContent: 'center',
    height: 55
  },
  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
  }
});

export default CollList;