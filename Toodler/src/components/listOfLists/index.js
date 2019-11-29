import React, { Component } from "react";
import { View, Text } from 'react-native';
import CollList from '../CollList';
import { getAllListsFromBoard, deleteList } from '../../services/taskService';
import { connect } from 'react-redux';
 
class ListOfLists extends Component {
  constructor (props) {
    super(props);

    this.getItems = this.getItems.bind(this);
  }

  getItems(){
    return this.props.lists.filter(list => list.boardId == this.props.id)
  }

  render() {
    return (
        <React.Fragment>
            {
                this.getItems().map((l) => (
                    <CollList list={l} key={l.id} />
                ))
            }
        </React.Fragment>
    );
  }
}

function mapStateToProps(state){  
  return{
    lists: state.list,
    tasks: state.task
  };
}

export default connect(mapStateToProps)(ListOfLists);