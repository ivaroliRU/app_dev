import React from 'react';
import Board from '../board';
import { deleteBoard , getAllBoards } from '../../services/taskService';
//import styles from './styles';

class BoardList extends React.Component {
  constructor(props){
    super(props);
    this.deleteBoard = this.deleteBoard.bind(this);
    this.state = { boards: getAllBoards(this.props) };
  }
  deleteBoard(id) {
    deleteBoard(id);
    this.setState({ boards: getAllBoards(this.props) });
  }

    render() {
        return (
            this.props.boards.map((l) => (
                <Board board={l} key={l.name} method={this.deleteBoard} />
            ))
        );
    }
}

export default BoardList;
