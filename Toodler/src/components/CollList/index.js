import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CollapsibleList from "react-native-collapsible-list";
import Task from '../task';
import { deleteTask, getAllTasksFromList } from '../../services/taskService';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
 
class CollList extends Component {
  constructor (props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.state = { items: getAllTasksFromList(this.props.listId) };
  }

  onSwipeLeft(gestureState) {
    console.log("asdf");
    
    console.log(this.props);
    
    this.props.deleteMethod(this.props.listId);
  }

  deleteTask(id){
    deleteTask(id);
    this.setState({ items: getAllTasksFromList(this.props.listId) });
  }

  render() {
    return (
      <GestureRecognizer onSwipeLeft={this.onSwipeLeft}>
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
          this.state.items.map((l) => (
            <Task task={l} key={l.id} method={this.deleteTask} />
          ))
        }
    </CollapsibleList>
    </GestureRecognizer>
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