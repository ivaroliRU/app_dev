import React, { Component } from "react";
import { View, Text } from 'react-native';
import CollList from '../CollList';
import { getAllListsFromBoard, getAllTasksFromList } from '../../services/taskService';
 
class ListOfLists extends Component {
  render() {
    var lists = getAllListsFromBoard(this.props.id);    

    return (
        <React.Fragment>
            {
                lists.map((l) => (
                    <CollList listId={l.id} listName={l.name} key={l.id} />
                ))
            }
        </React.Fragment>
    );
  }
}

export default ListOfLists;