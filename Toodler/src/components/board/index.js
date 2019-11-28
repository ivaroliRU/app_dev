import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import styles from './styles';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import NewBoardModal from '../addBoardModal'

class Board extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
          visable:  false,
        }
      }
    
    handleModal = (statement) => {
        this.setState({ visable: statement });
    }

    render() {
    const {navigate} = this.props.navigation;
        return (
            <React.Fragment>
                <NewBoardModal method={this.handleModal} isVisible={this.state.visable} hvadagera="MODIFY_BOARD" placeholder1={this.props.board.name} placeholder2={this.props.board.thumbnailPhoto} id={this.props.board.id}/>
                <Card style={styles.card}>
                <CardImage
                    source={{uri: this.props.board.thumbnailPhoto}}
                    resizeMode="cover"
                    style={styles.cardImage}
                />
                    <CardTitle
                        title={this.props.board.name}
                    />
                    <CardAction
                        separator={true}
                        inColumn={false}>
                            <CardButton
                            id = {this.props.id}
                            onPress={() => this.props.navigation.navigate('Board', {board:this.props.board})}
                            title="Open"
                            color="blue"
                            />
                            <CardButton
                            onPress={() => this.props.deleteBoard(this.props.board.id)}
                            title="Delete"
                            color="red"
                            />
                            <CardButton
                            onPress={() => {this.handleModal(true)}}
                            title="Modify"
                            color="gold"
                            />
                    </CardAction>
                </Card>
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
         deleteBoard : (id) => dispatch({type: 'DELETE_BOARD', id:id })
    }
}

export default connect(null, mapDispatchToProps)(withNavigation(Board));
