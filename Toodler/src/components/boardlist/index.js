import React from 'react';
import Board from '../board';
import { deleteBoard } from '../../services/taskService';
import { connect } from 'react-redux';

class BoardList extends React.Component {
  constructor(props){
    super(props);
  }

    render() {
        return (
            this.props.boards.map((l) => (
                <Board board={l} key={l.name} />
            ))
        );
    }
}

function mapStateToProps(state){  
  return{
    boards: state.board
  };
}

export default connect(mapStateToProps)(BoardList);