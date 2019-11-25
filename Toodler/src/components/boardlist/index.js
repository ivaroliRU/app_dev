import React from 'react';
import Board from '../board';
//import styles from './styles';

class BoardList extends React.Component {
    render() {
        return (
            this.props.boards.map((l) => (
                <Board board={l} key={l.name} />
            ))
        );
    }
}

export default BoardList;