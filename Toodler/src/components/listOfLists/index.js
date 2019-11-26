import React, { Component } from "react";
import { View, Text } from 'react-native';
import CollList from '../CollList';
import { getAllListsFromBoard, deleteList } from '../../services/taskService';
 
class ListOfLists extends Component {
  constructor (props) {
    super(props);
    this.deleteList = this.deleteList.bind(this);
    this.state = { lists: getAllListsFromBoard(this.props.id) };
    console.log(this.state);
    
  }

  deleteList(id){
    console.log("typpi");
    
    deleteList(id);
    this.state = { lists: getAllListsFromBoard(this.props.id) };
  }

  render() {
    return (
        <React.Fragment>
            {
                this.state.lists.map((l) => (
                    <CollList listId={l.id} listName={l.name} key={l.id} deleteMethod={this.deleteList} />
                ))
            }
        </React.Fragment>
    );
  }
}

export default ListOfLists;