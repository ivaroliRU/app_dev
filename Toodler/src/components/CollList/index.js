import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CollapsibleList from "react-native-collapsible-list";
 
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
            <View style={styles.collapsibleItem} key={l.id}>
              <Text>{l.description}</Text>
            </View>
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
    backgroundColor: "#FF0",
    borderRadius: 5,
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
    padding: 10
  }
});

export default CollList;